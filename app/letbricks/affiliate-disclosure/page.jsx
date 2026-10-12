import LegalShell from '@/components/LegalShell';

export const metadata = { title: 'Affiliate Disclosure | PrimeGearLab', alternates: { canonical: 'https://primegearlab.com/letbricks/affiliate-disclosure' } };

export default function Page() {
  return (
    <LegalShell title="Affiliate Disclosure">
      <p>PrimeGearLab is an independent affiliate publisher. It is not Letbricks and does not own, operate or represent Letbricks.</p>
      <p>As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.</p>
      <h2>How it works</h2>
      <ul>
        <li>Buttons on this page open pages on letbricks.com. Links include a referral parameter that lets the merchant recognize visits that came from us.</li>
        <li>We cannot confirm that every visit or purchase is attributed. Commission, if any, is decided by the merchant&apos;s affiliate program.</li>
        <li>Prices, stock, promotions and shipping times come from the merchant and can change. The merchant&apos;s site is the final source at checkout.</li>
      </ul>
      <h2>Trademarks</h2>
      <p>Letbricks is an independent marketplace for designer-licensed MOC sets. It does not use LEGO® parts and is not sponsored or endorsed by the LEGO® Group. LEGO® is a trademark of the LEGO Group. We are not affiliated with the LEGO Group.</p>
    </LegalShell>
  );
}
