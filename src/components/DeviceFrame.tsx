import React from 'react';
import { DeviceMode } from './PresentationToolbar';

interface DeviceFrameProps {
  mode: DeviceMode;
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ mode, children }) => {
  if (mode === 'desktop') {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  const frameWidths: Record<DeviceMode, string> = {
    desktop: 'w-full',
    laptop: 'max-w-[1280px]',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[390px]'
  };

  const frameLabels: Record<DeviceMode, string> = {
    desktop: 'Full Desktop View',
    laptop: 'Laptop Device Preview (1280px)',
    tablet: 'Tablet Device Preview (iPad / 768px)',
    mobile: 'Mobile Device Preview (iPhone / 390px)'
  };

  return (
    <div className="min-h-screen bg-[#070A10] py-8 px-4 flex flex-col items-center justify-start overflow-x-hidden">
      <div className="mb-4 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
          {frameLabels[mode]}
        </span>
      </div>

      <div 
        className={`w-full ${frameWidths[mode]} transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden border-4 border-slate-800/80 bg-slate-950`}
        style={{ minHeight: '85vh' }}
      >
        {/* Device Top Bezel / Header */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono text-slate-500 truncate max-w-[200px]">
            {mode === 'mobile' ? 'Mobile Viewport' : 'Browser Preview'}
          </span>
          <div className="w-8" />
        </div>

        {/* Scaled/Contained Content */}
        <div className="w-full bg-white text-slate-900 overflow-y-auto max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
};
