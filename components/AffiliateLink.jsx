'use client';

/** Native <a>: works with or without JS. Tracking is non-blocking and optional. */
export default function AffiliateLink({ href, label, placement, variant, auto, children }) {
  function track() {
    try {
      const params = { link_label: label, placement, destination: href, transport_type: 'beacon' };
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'affiliate_click', params);
        const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
        const lbl = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLICK_LABEL;
        if (id && lbl) window.gtag('event', 'conversion', { send_to: `${id}/${lbl}` });
      }
      if (typeof window.fbq === 'function') window.fbq('trackCustom', 'AffiliateClick', { label, placement });
    } catch {
      /* never block navigation */
    }
  }
  const cls = ['lb-btn', variant === 'ghost' ? 'ghost' : '', auto ? 'auto' : ''].join(' ').trim();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" onClick={track} data-placement={placement} className={cls}>
      {children}
    </a>
  );
}
