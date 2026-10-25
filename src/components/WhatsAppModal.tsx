import React from 'react';
import { WhatsAppEventDetail } from '../utils/whatsapp';
import { MessageSquare, ExternalLink, X, Settings2 } from 'lucide-react';

interface WhatsAppModalProps {
  detail: WhatsAppEventDetail | null;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ detail, onClose }) => {
  if (!detail) return null;

  const handleOpenLink = () => {
    window.open(detail.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Interactive WhatsApp Integration
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-white">
              WhatsApp Order & Inquiry Preview
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          In this live demonstration, clicking WhatsApp generates a direct, pre-formatted order inquiry message. When deployed for your business, customers will instantly connect to your phone.
        </p>

        <div className="space-y-3 mb-6 bg-slate-900/90 rounded-xl p-4 border border-slate-800">
          <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-2">
            <span>Target Number:</span>
            <span className="font-mono text-emerald-300 font-semibold">{detail.config.displayPhone}</span>
          </div>
          <div className="text-xs text-slate-400">
            <span className="block mb-1 font-medium text-slate-300">Generated WhatsApp Message:</span>
            <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-emerald-100 font-sans text-xs italic leading-relaxed">
              "{detail.message}"
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-200 text-xs mb-6">
          <Settings2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-sky-300">Quick Configuration Tip:</span>
            To link your real shop phone number, simply edit <code className="bg-sky-900/60 px-1 py-0.5 rounded text-sky-200 font-mono text-[11px]">src/data/demo-config.ts</code> and set <code className="bg-sky-900/60 px-1 py-0.5 rounded text-sky-200 font-mono text-[11px]">isConfigured: true</code>.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleOpenLink}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            Proceed to WhatsApp Web
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
