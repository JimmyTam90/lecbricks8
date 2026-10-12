export default function NotFound() {
  return (
    <main style={{ maxWidth: 560, margin: '0 auto', padding: '96px 16px', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#F8FAFC' }}>
      <h1 style={{ fontSize: 30, margin: 0 }}>Page not found</h1>
      <p style={{ color: '#CBD5E1' }}>That page does not exist.</p>
      <a href="/letbricks" style={{ display: 'inline-block', marginTop: 16, padding: '12px 24px', borderRadius: 10, background: '#FF6600', color: '#0B0F17', fontWeight: 800, textDecoration: 'none' }}>
        Back to the guide
      </a>
    </main>
  );
}
