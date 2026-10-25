/**
 * WhatsApp Helper Utilities
 * Generates verified WhatsApp click-to-chat URLs and handles demo preview states.
 */

import { WhatsAppConfig } from '../data/demo-config';

export function buildWhatsAppUrl(config: WhatsAppConfig, customMessage?: string): string {
  const message = customMessage || config.defaultMessagePrefix;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${config.phoneNumber}?text=${encodedText}`;
}

export interface WhatsAppEventDetail {
  config: WhatsAppConfig;
  message: string;
  url: string;
}

export function triggerWhatsAppAction(
  config: WhatsAppConfig,
  customMessage?: string,
  onDemoInterception?: (detail: WhatsAppEventDetail) => void
) {
  const message = customMessage || config.defaultMessagePrefix;
  const url = buildWhatsAppUrl(config, message);

  // If the number is marked as unconfigured demo number, we can trigger the demo modal
  // or allow opening WhatsApp if confirmed.
  if (!config.isConfigured && onDemoInterception) {
    onDemoInterception({ config, message, url });
    return;
  }

  // Open in new tab safely
  window.open(url, '_blank', 'noopener,noreferrer');
}
