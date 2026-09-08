import React, { useState, useEffect } from 'react';
import { resolveAttachmentUrl } from '../attachmentStore';
import { Image as ImageIcon } from 'lucide-react';

interface ObsidianImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ObsidianImage: React.FC<ObsidianImageProps> = ({ src, alt, className = '' }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const cleanSrc = src.trim();

    if (
      cleanSrc.startsWith('http://') ||
      cleanSrc.startsWith('https://') ||
      cleanSrc.startsWith('data:')
    ) {
      setBlobUrl(cleanSrc);
      setLoading(false);
      return;
    }

    resolveAttachmentUrl(cleanSrc).then((url) => {
      if (isMounted) {
        setBlobUrl(url);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (loading) {
    return (
      <div className="animate-pulse bg-slate-900 border border-slate-800 rounded-xl h-36 w-full flex items-center justify-center text-xs text-slate-500 font-mono my-3">
        Resolving vault attachment...
      </div>
    );
  }

  if (!blobUrl) {
    return (
      <div className="my-3 p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 flex items-center gap-2">
        <ImageIcon className="w-4 h-4 text-slate-500 shrink-0" />
        <span>
          Attachment: <code className="text-slate-300">{src}</code> (not present in current vault)
        </span>
      </div>
    );
  }

  return (
    <div className={`my-4 rounded-xl overflow-hidden border border-slate-800 bg-black/40 text-center ${className}`}>
      <img
        src={blobUrl}
        alt={alt || src}
        className="max-w-full max-h-[550px] h-auto rounded-lg mx-auto object-contain"
      />
      {alt && (
        <div className="text-[11px] text-slate-400 py-1.5 font-mono border-t border-slate-800 bg-slate-900/50">
          {alt}
        </div>
      )}
    </div>
  );
};
