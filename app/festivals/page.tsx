export default function FestivalsPage() {
  const festivals = [
    { name: 'Thaipusam', tamil: 'தைப்பூசம்', date: 'Jan/Feb', desc: 'Festival Dewa Murugan, umat membawa Kavadi sebagai tanda pengabdian', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { name: 'Pongal', tamil: 'பொங்கல்', date: '14-17 Jan', desc: 'Festival panen Tamil, merayakan kemakmuran dan rasa syukur', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { name: 'Deepavali', tamil: 'தீபாவளி', date: 'Okt/Nov', desc: 'Festival Cahaya, merayakan kemenangan kebaikan atas kejahatan', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
    { name: 'Navaratri', tamil: 'நவராத்திரி', date: 'Sep/Okt', desc: '9 malam pemujaan Dewi Shakti dalam berbagai manifestasinya', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
    { name: 'Maha Shivaratri', tamil: 'மகா சிவராத்திரி', date: 'Feb/Mar', desc: 'Malam agung Dewa Shiva, umat berpuasa dan berjaga semalam', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { name: 'Tamil New Year', tamil: 'தமிழ் புத்தாண்டு', date: '14 April', desc: 'Tahun Baru Tamil, awal bulan Chithirai dalam kalender Tamil', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(145deg, #050208 0%, #0d0618 30%, #120a00 60%, #050208 100%)', color: '#f5e6c8', fontFamily: 'Georgia, serif', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'fixed', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,83,9,0.15) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{position: 'fixed', bottom: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)', pointerEvents: 'none'}} />

      <nav style={{background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(245,158,11,0.3)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100}}>
        <a href="/" style={{background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 22, fontWeight: 'bold', letterSpacing: 1, textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fbbf24', fontSize: 14, textDecoration: 'none'}}>Festival</a>
          <a href="/prayer" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Doa</a>
          <a href="/scriptures" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Kitab</a>
        </div>
      </nav>

      <div style={{padding: '60px 24px 40px', textAlign: 'center'}}>
        <h1 style={{fontSize: 'clamp(28px,5vw,48px)', fontWeight: 'bold', background: 'linear-gradient(135deg, #fbbf24, #fde68a, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12, letterSpacing: 2}}>📅 Festival Hindu Tamil</h1>
        <p style={{color: 'rgba(156,163,175,0.8)', letterSpacing: 1}}>Perayaan suci dalam tradisi Hindu Tamil sepanjang tahun</p>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 16, marginTop: 24}}>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #f59e0b)'}} />
          <span style={{color: '#f59e0b', fontSize: 16}}>✦</span>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, #f59e0b, transparent)'}} />
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, padding: '0 32px 80px', maxWidth: 960, margin: '0 auto'}}>
        {festivals.map((f, i) => (
          <div key={i} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'}}>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: f.gradient}} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
              <h2 style={{background: f.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 20, fontWeight: 'bold'}}>{f.name}</h2>
              <span style={{background: 'rgba(245,158,11,0.15)', color: '#fbbf24', padding: '4px 12px', borderRadius: 20, fontSize: 11, border: '1px solid rgba(245,158,11,0.3)'}}>{f.date}</span>
            </div>
            <p style={{color: '#fb923c', fontSize: 14, marginBottom: 10, letterSpacing: 1}}>{f.tamil}</p>
            <p style={{color: 'rgba(209,213,219,0.8)', fontSize: 14, lineHeight: 1.6}}>{f.desc}</p>
          </div>
        ))}
      </div>

      <div style={{textAlign: 'center', padding: '20px 0 40px'}}>
        <a href="/" style={{color: '#fbbf24', textDecoration: 'none', border: '1px solid rgba(245,158,11,0.4)', padding: '12px 32px', borderRadius: 50, fontSize: 14, letterSpacing: 1}}>← Kembali ke Beranda</a>
      </div>
      <div style={{textAlign: 'center', padding: '20px', borderTop: '1px solid rgba(245,158,11,0.15)', color: 'rgba(120,83,15,0.6)', fontSize: 12, letterSpacing: 2}}>ॐ நமசிவாய • SAN SANATANA TAMIL ॐ</div>
    </main>
  )
}
