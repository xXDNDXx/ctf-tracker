/**
 * ZEROBOX - Cryptographic Backup & OPSEC Vault Utility
 * 100% Offline & Browser-Native (Web Crypto API - crypto.subtle)
 * Zero external npm dependencies.
 *
 * Specification:
 * - Cipher: AES-GCM 256-bit (authenticated encryption)
 * - KDF: PBKDF2 with HMAC-SHA256, 600,000 iterations (OWASP recommended)
 * - Salt: 16 bytes (128-bit) cryptographically random
 * - IV: 12 bytes (96-bit) standard GCM nonce
 * - Magic Header: 'ZEROBOX_ENC_V1' (14 bytes) for instant format verification
 */

const MAGIC_HEADER = 'ZEROBOX_ENC_V1';
const PBKDF2_ITERATIONS = 600000;
const SALT_LENGTH = 16;
const IV_LENGTH = 12;

/**
 * Derives an AES-GCM 256-bit CryptoKey from a plaintext passphrase and salt using PBKDF2
 */
async function deriveEncryptionKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as any,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypts a plaintext JSON payload into an authenticated binary ArrayBuffer
 */
export async function encryptPayload(jsonStr: string, passphrase: string): Promise<ArrayBuffer> {
  if (!passphrase || passphrase.trim().length === 0) {
    throw new Error('Encryption passphrase cannot be empty');
  }

  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const key = await deriveEncryptionKey(passphrase, salt);

  const enc = new TextEncoder();
  const plaintextBuffer = enc.encode(jsonStr);

  const ciphertextBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    plaintextBuffer
  );

  const magicBytes = enc.encode(MAGIC_HEADER);
  const totalLength = magicBytes.length + salt.length + iv.length + ciphertextBuffer.byteLength;
  const result = new Uint8Array(totalLength);

  let offset = 0;
  result.set(magicBytes, offset);
  offset += magicBytes.length;

  result.set(salt, offset);
  offset += salt.length;

  result.set(iv, offset);
  offset += iv.length;

  result.set(new Uint8Array(ciphertextBuffer), offset);

  return result.buffer;
}

/**
 * Decrypts an authenticated binary ArrayBuffer back into plaintext JSON using the passphrase
 */
export async function decryptPayload(encryptedBuffer: ArrayBuffer, passphrase: string): Promise<string> {
  if (!passphrase || passphrase.trim().length === 0) {
    throw new Error('Decryption passphrase cannot be empty');
  }

  const enc = new TextEncoder();
  const magicBytes = enc.encode(MAGIC_HEADER);

  if (encryptedBuffer.byteLength < magicBytes.length + SALT_LENGTH + IV_LENGTH + 16) {
    throw new Error('Invalid encrypted backup: file is truncated or corrupted');
  }

  const view = new Uint8Array(encryptedBuffer);

  // 1. Verify Magic Header
  for (let i = 0; i < magicBytes.length; i++) {
    if (view[i] !== magicBytes[i]) {
      throw new Error('Unrecognized backup format. File is not a valid ZEROBOX encrypted backup.');
    }
  }

  let offset = magicBytes.length;
  const salt = view.slice(offset, offset + SALT_LENGTH);
  offset += SALT_LENGTH;

  const iv = view.slice(offset, offset + IV_LENGTH);
  offset += IV_LENGTH;

  const ciphertext = view.slice(offset);

  const key = await deriveEncryptionKey(passphrase, salt);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      key,
      ciphertext
    );

    const dec = new TextDecoder();
    return dec.decode(decryptedBuffer);
  } catch (err) {
    throw new Error('Decryption failed: incorrect password or tampered backup data.');
  }
}

/**
 * Checks whether an ArrayBuffer has the ZEROBOX_ENC_V1 magic header
 */
export function isEncryptedZeroboxBackup(buffer: ArrayBuffer): boolean {
  const enc = new TextEncoder();
  const magicBytes = enc.encode(MAGIC_HEADER);
  if (buffer.byteLength < magicBytes.length) return false;
  const view = new Uint8Array(buffer, 0, magicBytes.length);
  for (let i = 0; i < magicBytes.length; i++) {
    if (view[i] !== magicBytes[i]) return false;
  }
  return true;
}

/**
 * Computes a SHA-256 hex digest of a string payload using browser-native Web Crypto.
 */
export async function computeSha256(content: string): Promise<string> {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    return '';
  }
  const enc = new TextEncoder();
  const buffer = enc.encode(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verifies if the computed SHA-256 digest matches the expected hex hash.
 */
export async function verifySha256(content: string, expectedHex: string): Promise<boolean> {
  if (!content || !expectedHex) return false;
  const computed = await computeSha256(content);
  return computed.toLowerCase() === expectedHex.trim().toLowerCase();
}

