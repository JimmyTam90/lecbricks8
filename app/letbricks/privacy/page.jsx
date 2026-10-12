import LegalShell from '@/components/LegalShell';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Privacy Policy | PrimeGearLab', alternates: { canonical: 'https://primegearlab.com/letbricks/privacy' } };

export default function Page() {
  return (
    <LegalShell title="Privacy Policy">
      <p>This page explains what PrimeGearLab (&quot;we&quot;) collects when you visit our Letbricks guide at primegearlab.com/letbricks. This policy has not been reviewed by a lawyer.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Usage data such as pages viewed, device and browser type, approximate location, referring source and UTM parameters.</li>
        <li>Click events when you press a button that leads to the merchant.</li>
        <li>Email and message content only if you write to us.</li>
      </ul>
      <h2>Analytics and advertising tools</h2>
      <p>When enabled, we may use Google Analytics, Google Ads conversion measurement and the Meta Pixel. These tools can set cookies or similar identifiers and receive data about your visit. You can control cookies in your browser and use the opt-out tools those providers offer.</p>
      <h2>Merchant site</h2>
      <p>When you click through to letbricks.com, the merchant handles your order, payment and personal data under its own privacy policy. We do not receive your payment details.</p>
      <h2>Your choices</h2>
      <p>You can ask us to delete or correct data we hold about you by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We do not knowingly collect information from children under 13.</p>
    </LegalShell>
  );
}
