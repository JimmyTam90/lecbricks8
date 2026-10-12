import Link from 'next/link';

export default function LegalShell({ title, updated = 'October 12, 2026', children }) {
  return (
    <main className="lb-legal">
      <Link href="/letbricks" className="lb-back">Back to the Letbricks guide</Link>
      <h1>{title}</h1>
      <p className="lb-meta">Last updated {updated}</p>
      {children}
    </main>
  );
}
