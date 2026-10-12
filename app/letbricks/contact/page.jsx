import LegalShell from '@/components/LegalShell';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Contact | PrimeGearLab', alternates: { canonical: 'https://primegearlab.com/letbricks/contact' } };

export default function Page() {
  return (
    <LegalShell title="Contact Us">
      <p>Questions about this page, privacy requests or corrections: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <h2>Order, shipping or product problems</h2>
      <p>PrimeGearLab does not process orders. For order status, missing parts, returns or refunds, contact Letbricks customer service through the contact page on letbricks.com. Have your order number ready.</p>
    </LegalShell>
  );
}
