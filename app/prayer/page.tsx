export default function PrayerPage() {
  const prayers = [
    { name: 'Gayatri Mantra', tamil: 'காயத்ரி மந்திரம்', time: 'Pagi', mantra: 'Om Bhur Bhuvaḥ Swaḥ, Tat Savitur Vareṇyam, Bhargo Devasya Dhīmahi, Dhiyo Yo Naḥ Prachodayāt', meaning: 'Ya Tuhan, semoga Engkau menerangi pikiran kami dengan kebijaksanaan ilahi', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { name: 'Murugan Mantra', tamil: 'முருகன் மந்திரம்', time: 'Pagi & Sore', mantra: 'Om Saravana Bhava, Om Sharavanabhavaya Namah', meaning: 'Salam kepada Dewa Murugan yang lahir di semak-semak ilalang suci', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
    { name: 'Shiva Panchakshara', tamil: 'சிவ பஞ்சாட்சரம்', time: 'Kapan saja', mantra: 'Om Namah Shivaya — நமச்சிவாய', meaning: 'Sujud kepada Dewa Shiva, penguasa alam semesta', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { name: 'Ganesha Mantra', tamil: 'கணேஷ் மந்திரம்', time: 'Sebelum memulai', mantra: 'Om Gam Ganapataye Namaha', meaning: 'Ya Ganesha, berkati setiap awal dengan kebijaksanaan dan tanpa halangan', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { name: 'Lakshmi Mantra', tamil: 'லக்ஷ்மி மந்திரம்', time: 'Jumat', mantra: 'Om Shreem Mahalakshmiyei Namaha', meaning: 'Ya Dewi Lakshmi, limpahkanlah kemakmuran dan keberkahan', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
    { name: 'Doa Malam', tamil: 'இரவு பிரார்த்தனை', time: 'Malam', mantra: 'Om Shanti Shanti Shanti, Sarve Bhavantu Sukhinah', meaning: 'Semoga semua makhluk berbahagia, semoga semua bebas dari penderitaan', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(145deg, #050208 0%, #0d0618 30%, #120a00 60%, #050208 100%)', color: '#f5e6c8', fontFamily: 'Georgia, serif', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'fixed', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,83,9,0.15) 0%, transparent 70%)', pointerEvents: 'none'}} />

      <nav style={{background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(245,158,11,0.3)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100}}>
        <a href="/" style={{background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 22, fontWeight: 'bold', letterSpacing: 1, textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Festival</a>
          <a href="/prayer" style={{color: '#fbbf24', fontSize: 14, textDecoration: 'none'}}>Doa</a>
          <a href="/scriptures" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Kitab</a>
        </div>
      </nav>

      <div style={{padding: '60px 24px 40px', textAlign: 'center'}}>
        <h1 style={{fontSize: 'clamp(28px,5vw,48px)', fontWeight: 'bold', background: 'linear-gradient(135deg, #fbbf24, #fde68a, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12, letterSpacing: 2}}>🙏 Doa & Mantra Harian</h1>
        <p style={{color: 'rgba(156,163,175,0.8)', letterSpacing: 1}}>Mantra dan doa suci untuk kehidupan spiritual sehari-hari</p>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 16, marginTop: 24}}>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #f59e0b)'}} />
          <span style={{color: '#f59e0b', fontSize: 16}}>✦</span>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, #f59e0b, transparent)'}} />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 20, padding: '0 32px 80px', maxWidth: 700, margin: '0 auto'}}>
        {prayers.map((p, i) => (
          <div key={i} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'}}>
            <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: p.gradient}} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, paddingLeft: 8}}>
              <h2 style={{background: p.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 18, fontWeight: 'bold'}}>{p.name}</h2>
              <span style={{background: 'rgba(245,158,11,0.15)', color: '#fbbf24', padding: '4px 12px', borderRadius: 20, fontSize: 11, border: '1px solid rgba(245,158,11,0.3)'}}>⏰ {p.time}</span>
            </div>
            <p style={{color: '#fb923c', fontSize: 13, marginBottom: 12, paddingLeft: 8, letterSpacing: 1}}>{p.tamil}</p>
            <div style={{background: 'rgba(0,0,0,0.3)', padding: '14px 16px', borderRadius: 12, marginBottom: 12, border: '1px solid rgba(245,158,11,0.1)'}}>
              <p style={{color: '#fcd34d', fontSize: 14, fontStyle: 'italic', lineHeight: 1.8}}>{p.mantra}</p>
            </div>
            <p style={{color: 'rgba(156,163,175,0.7)', fontSize: 13, lineHeight: 1.6, paddingLeft: 8}}>💡 {p.meaning}</p>
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
