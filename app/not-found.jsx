import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-neutral-600">That page does not exist. Head back to the Letbricks guide.</p>
      <Link href="/letbricks" className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-brick px-6 font-bold text-ink">
        Back to the guide
      </Link>
    </main>
  );
}
