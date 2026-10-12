import LegalShell from '@/components/LegalShell';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Terms of Service | PrimeGearLab', alternates: { canonical: 'https://primegearlab.com/letbricks/terms' } };

export default function Page() {
  return (
    <LegalShell title="Terms of Service">
      <p>By using this page you agree to these terms. They have not been reviewed by a lawyer.</p>
      <h2>Who we are</h2>
      <p>PrimeGearLab is an independent affiliate publisher. We do not sell, ship or support products. Purchases happen on letbricks.com under the merchant&apos;s own terms, shipping and return policies.</p>
      <h2>Information on this page</h2>
      <p>We try to keep product details accurate, but prices, availability, promotions and delivery times are set by the merchant and may change without notice. Prices shown were listed on October 12, 2026. Always confirm on the merchant site.</p>
      <h2>Affiliate links</h2>
      <p>We may earn a commission from qualifying purchases made through links on this page. See our <Link href="/letbricks/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
      <h2>Trademarks</h2>
      <p>LEGO® is a trademark of the LEGO Group, which does not sponsor, authorize or endorse Letbricks or this page. Other names belong to their owners.</p>
      <h2>Liability</h2>
      <p>This page is provided as is. To the extent allowed by law, we are not responsible for losses arising from your use of this page or from transactions with the merchant.</p>
      <h2>Contact</h2>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalShell>
  );
}
