import { redirect } from 'next/navigation';

// The Spoke's own root is not a public page; send direct visitors to the real one.
export default function Home() {
  redirect('/letbricks');
}
