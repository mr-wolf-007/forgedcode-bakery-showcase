import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Laptop, 
  ChevronDown, 
  Eye, 
  Minimize2, 
  Sparkles 
} from 'lucide-react';
import { SHOWCASE_CONCEPTS } from '../data/showcase-data';

export type DeviceMode = 'desktop' | 'laptop' | 'tablet' | 'mobile';

interface PresentationToolbarProps {
  currentDemoId: string;
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
}

export const PresentationToolbar: React.FC<PresentationToolbarProps> = ({
  currentDemoId,
  deviceMode,
  onDeviceModeChange
}) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentConcept = SHOWCASE_CONCEPTS.find(c => c.id === currentDemoId) || SHOWCASE_CONCEPTS[0];

  return (
    <>
      {/* Minimized Pill when toolbar is collapsed */}
      {isCollapsed ? (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed(false)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-sky-400 border border-sky-500/40 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
            title="Expand Presentation Toolbar"
          >
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            <span>Showcase Controls</span>
          </button>
        </div>
      ) : (
        /* Full Presentation Toolbar */
        <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800/90 text-slate-100 shadow-xl select-none">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap">
            
            {/* Left: Back to ForgeDCode Showcase & Branding */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-slate-700/60"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
                <span>Showcase Home</span>
              </button>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              {/* Demo Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-800/50 hover:border-sky-700 text-sky-300 text-xs font-semibold transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate max-w-[140px] sm:max-w-[200px]">{currentConcept.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-72 max-h-[75vh] overflow-y-auto bg-[#0F172A] border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 scrollbar-thin">
                    <div className="sticky top-0 bg-[#0F172A] px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-800 z-10 flex items-center justify-between">
                      <span>Switch Demo Concept (10)</span>
                      <span className="text-sky-400 font-mono text-[9px]">10 Designs</span>
                    </div>
                    {SHOWCASE_CONCEPTS.map(concept => (
                      <button
                        key={concept.id}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate(concept.route);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                          concept.id === currentDemoId 
                            ? 'bg-sky-500/10 text-sky-300 font-semibold border-l-2 border-sky-400' 
                            : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{concept.name}</div>
                          <div className="text-[10px] text-slate-400 truncate max-w-[180px]">{concept.subtitle}</div>
                        </div>
                        {concept.id === currentDemoId && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center: Device Simulation Switcher */}
            <div className="flex items-center bg-slate-900/90 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => onDeviceModeChange('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Full Desktop Screen (100%)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Desktop</span>
              </button>

              <button
                onClick={() => onDeviceModeChange('laptop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  deviceMode === 'laptop'
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Laptop Preview (1280px)"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Laptop</span>
              </button>

              <button
                onClick={() => onDeviceModeChange('tablet')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Tablet Preview (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Tablet</span>
              </button>

              <button
                onClick={() => onDeviceModeChange('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Mobile Preview (390px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            {/* Right: Demo Badge & Hide Toolbar button */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Client Demo Mode
              </span>

              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Hide Presentation Bar for Full Immersion"
                aria-label="Hide Toolbar"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
