export default function FestivalsPage() {
  const festivals = [
    { name: 'Thaipusam', tamil: 'தைப்பூசம்', date: 'Januari/Februari', desc: 'Festival Dewa Murugan, umat membawa Kavadi sebagai tanda pengabdian', color: '#f59e0b' },
    { name: 'Pongal', tamil: 'பொங்கல்', date: '14-17 Januari', desc: 'Festival panen Tamil, merayakan kemakmuran dan rasa syukur', color: '#10b981' },
    { name: 'Deepavali', tamil: 'தீபாவளி', date: 'Oktober/November', desc: 'Festival Cahaya, merayakan kemenangan kebaikan atas kejahatan', color: '#f97316' },
    { name: 'Navaratri', tamil: 'நவராத்திரி', date: 'September/Oktober', desc: '9 malam pemujaan Dewi Shakti dalam berbagai manifestasinya', color: '#ec4899' },
    { name: 'Maha Shivaratri', tamil: 'மகா சிவராத்திரி', date: 'Februari/Maret', desc: 'Malam agung Dewa Shiva, umat berpuasa dan berjaga semalam', color: '#8b5cf6' },
    { name: 'Tamil New Year', tamil: 'தமிழ் புத்தாண்டு', date: '14 April', desc: 'Tahun Baru Tamil, awal bulan Chithirai dalam kalender Tamil', color: '#3b82f6' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f0a00, #1a0a00, #0a0f1a)', color: '#f5e6c8'}}>
      <nav style={{background: 'rgba(124,45,0,0.9)', borderBottom: '2px solid #f59e0b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#fbbf24', fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: '#fcd34d', fontSize: 14}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fbbf24', fontSize: 14}}>Festival</a>
          <a href="/prayer" style={{color: '#fcd34d', fontSize: 14}}>Doa</a>
        </div>
      </nav>

      <div style={{padding: '40px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h1 style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>📅 Festival Hindu Tamil</h1>
          <p style={{color: '#9ca3af'}}>Perayaan suci dalam tradisi Hindu Tamil sepanjang tahun</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto'}}>
          {festivals.map((f, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.05)', border: `1px solid ${f.color}55`, borderRadius: 12, padding: 24, borderTop: `3px solid ${f.color}`}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <h2 style={{color: f.color, fontSize: 20, fontWeight: 'bold'}}>{f.name}</h2>
                <span style={{background: `${f.color}22`, color: f.color, padding: '4px 10px', borderRadius: 20, fontSize: 11}}>{f.date}</span>
              </div>
              <p style={{color: '#fb923c', marginBottom: 8, fontSize: 14}}>{f.tamil}</p>
              <p style={{color: '#d1d5db', fontSize: 14, lineHeight: 1.6}}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: 40}}>
          <a href="/" style={{color: '#fbbf24', textDecoration: 'none', border: '1px solid #f59e0b', padding: '10px 24px', borderRadius: 8}}>← Kembali ke Beranda</a>
        </div>
      </div>
    </main>
  )
}
