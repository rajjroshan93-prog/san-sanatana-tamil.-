export default function PrayerPage() {
  const prayers = [
    { name: 'Gayatri Mantra', tamil: 'காயத்ரி மந்திரம்', time: 'Pagi', mantra: 'Om Bhur Bhuvaḥ Swaḥ, Tat Savitur Vareṇyam, Bhargo Devasya Dhīmahi, Dhiyo Yo Naḥ Prachodayāt', meaning: 'Ya Tuhan, semoga Engkau menerangi pikiran kami dengan kebijaksanaan ilahi', color: '#f59e0b' },
    { name: 'Murugan Mantra', tamil: 'முருகன் மந்திரம்', time: 'Pagi & Sore', mantra: 'Om Saravana Bhava, Om Sharavanabhavaya Namah', meaning: 'Salam kepada Dewa Murugan yang lahir di semak-semak ilalang suci', color: '#f97316' },
    { name: 'Shiva Panchakshara', tamil: 'சிவ பஞ்சாட்சரம்', time: 'Kapan saja', mantra: 'Om Namah Shivaya — நமச்சிவாய', meaning: 'Sujud kepada Dewa Shiva, penguasa alam semesta', color: '#8b5cf6' },
    { name: 'Ganesha Mantra', tamil: 'கணேஷ் மந்திரம்', time: 'Sebelum memulai', mantra: 'Om Gam Ganapataye Namaha, Vakratunda Mahakaya', meaning: 'Ya Ganesha, berkati setiap awal dengan kebijaksanaan dan tanpa halangan', color: '#10b981' },
    { name: 'Lakshmi Mantra', tamil: 'லக்ஷ்மி மந்திரம்', time: 'Jumat', mantra: 'Om Shreem Mahalakshmiyei Namaha', meaning: 'Ya Dewi Lakshmi, limpahkanlah kemakmuran dan keberkahan', color: '#ec4899' },
    { name: 'Doa Malam', tamil: 'இரவு பிரார்த்தனை', time: 'Malam', mantra: 'Om Shanti Shanti Shanti, Sarve Bhavantu Sukhinah', meaning: 'Semoga semua makhluk berbahagia, semoga semua bebas dari penderitaan', color: '#3b82f6' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f0a00, #1a0a00, #0a0f1a)', color: '#f5e6c8'}}>
      <nav style={{background: 'rgba(124,45,0,0.9)', borderBottom: '2px solid #f59e0b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#fbbf24', fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: '#fcd34d', fontSize: 14}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fcd34d', fontSize: 14}}>Festival</a>
          <a href="/prayer" style={{color: '#fbbf24', fontSize: 14}}>Doa</a>
        </div>
      </nav>

      <div style={{padding: '40px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h1 style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>🙏 Doa & Mantra Harian</h1>
          <p style={{color: '#9ca3af'}}>Mantra dan doa suci untuk kehidupan spiritual sehari-hari</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 700, margin: '0 auto'}}>
          {prayers.map((p, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.05)', border: `1px solid ${p.color}55`, borderRadius: 12, padding: 24, borderLeft: `4px solid ${p.color}`}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <h2 style={{color: p.color, fontSize: 18, fontWeight: 'bold'}}>{p.name}</h2>
                <span style={{background: `${p.color}22`, color: p.color, padding: '4px 10px', borderRadius: 20, fontSize: 11}}>⏰ {p.time}</span>
              </div>
              <p style={{color: '#fb923c', marginBottom: 12, fontSize: 13}}>{p.tamil}</p>
              <div style={{background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: 8, marginBottom: 12}}>
                <p style={{color: '#fcd34d', fontSize: 14, fontStyle: 'italic', lineHeight: 1.8}}>{p.mantra}</p>
              </div>
              <p style={{color: '#9ca3af', fontSize: 13, lineHeight: 1.6}}>💡 {p.meaning}</p>
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
