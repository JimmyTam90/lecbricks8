'use client';

/**
 * Native <a> so navigation is never blocked. Analytics fire in the click handler using
 * non-blocking beacon transport; if a service is not configured it is silently skipped.
 * A click event is NOT proof that the merchant attributed the visit or sale.
 */
export default function AffiliateLink({ href, label, placement, className = '', children }) {
  function track() {
    try {
      const params = { link_label: label, placement, destination: href, transport_type: 'beacon' };
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'affiliate_click', params);
        const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
        const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLICK_LABEL;
        if (adsId && adsLabel) window.gtag('event', 'conversion', { send_to: `${adsId}/${adsLabel}` });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'AffiliateClick', { label, placement });
      }
    } catch {
      /* never block navigation */
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={track}
      data-placement={placement}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-3 text-center text-base font-bold transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
