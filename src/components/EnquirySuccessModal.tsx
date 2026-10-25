import React from 'react';
import { CheckCircle2, X, MessageSquare, Info } from 'lucide-react';
import { WhatsAppConfig } from '../data/demo-config';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface EnquiryData {
  name: string;
  phone: string;
  eventType?: string;
  cakeFlavor?: string;
  date?: string;
  quantity?: string;
  notes?: string;
}

interface EnquirySuccessModalProps {
  data: EnquiryData | null;
  businessName: string;
  whatsappConfig: WhatsAppConfig;
  onClose: () => void;
}

export const EnquirySuccessModal: React.FC<EnquirySuccessModalProps> = ({
  data,
  businessName,
  whatsappConfig,
  onClose
}) => {
  if (!data) return null;

  const summaryMessage = `Hi ${businessName}! New Order Inquiry from ${data.name} (${data.phone}): Event: ${data.eventType || data.cakeFlavor || 'Celebration'}, Date: ${data.date || 'Soon'}, Qty: ${data.quantity || '1'}, Notes: ${data.notes || 'None'}`;
  const whatsappUrl = buildWhatsAppUrl(whatsappConfig, summaryMessage);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Form Validation Passed
            </span>
            <h3 className="text-xl font-bold text-white">
              Demonstration Inquiry Captured
            </h3>
          </div>
        </div>

        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-5 text-amber-200 text-xs flex items-start gap-2.5 leading-relaxed">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Illustrative Demonstration Notice:</strong> This inquiry has been validated on the client side. As this is a showcase demo, <em>no real message has been delivered to any external party</em>. When ForgeDCode builds your website, this connects seamlessly to your WhatsApp, CRM, or order management system.
          </div>
        </div>

        <div className="space-y-2 mb-6 bg-stone-950/80 rounded-xl p-4 border border-stone-800 text-xs">
          <h4 className="font-semibold text-stone-300 uppercase tracking-wider text-[11px] mb-2 border-b border-stone-800 pb-1.5">
            Captured Inquiry Payload
          </h4>
          <div className="flex justify-between py-1 border-b border-stone-800/50">
            <span className="text-stone-400">Customer Name:</span>
            <span className="font-medium text-stone-200">{data.name}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-stone-800/50">
            <span className="text-stone-400">Contact Number:</span>
            <span className="font-mono text-emerald-300">{data.phone}</span>
          </div>
          {(data.eventType || data.cakeFlavor) && (
            <div className="flex justify-between py-1 border-b border-stone-800/50">
              <span className="text-stone-400">Requirement / Flavor:</span>
              <span className="font-medium text-stone-200">{data.eventType || data.cakeFlavor}</span>
            </div>
          )}
          {data.quantity && (
            <div className="flex justify-between py-1 border-b border-stone-800/50">
              <span className="text-stone-400">Quantity / Weight:</span>
              <span className="font-medium text-stone-200">{data.quantity}</span>
            </div>
          )}
          {data.date && (
            <div className="flex justify-between py-1 border-b border-stone-800/50">
              <span className="text-stone-400">Required Date:</span>
              <span className="font-medium text-stone-200">{data.date}</span>
            </div>
          )}
          {data.notes && (
            <div className="py-1">
              <span className="text-stone-400 block mb-0.5">Special Instructions:</span>
              <p className="text-stone-300 italic">{data.notes}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            Send This Lead via WhatsApp
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium text-sm transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
