import Link from 'next/link';

export default function LegalShell({ title, updated = 'October 12, 2026', children }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/letbricks" className="inline-flex min-h-11 items-center text-sm font-semibold text-brickdark underline">
        Back to the Letbricks guide
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-1 text-sm text-neutral-500">Last updated {updated}</p>
      <div className="mt-6 space-y-4 leading-relaxed text-neutral-800 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_a]:underline">{children}</div>
    </main>
  );
}
