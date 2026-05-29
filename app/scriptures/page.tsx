export default function ScripturesPage() {
  const scriptures = [
    { name: 'Thirukkural', tamil: 'திருக்குறள்', author: 'Thiruvalluvar', desc: 'Karya sastra klasik Tamil berisi 1330 kuplet tentang etika, politik, dan cinta', verse: 'Uyirae uyirae uyirae — Jiwa adalah jiwa dari jiwa', color: '#f59e0b' },
    { name: 'Tevaram', tamil: 'தேவாரம்', author: 'Nayanmars', desc: 'Kumpulan himne suci untuk Dewa Shiva, bagian dari Tirumurai', verse: 'Namah Shivaya — சிவாய நம', color: '#8b5cf6' },
    { name: 'Thiruppavai', tamil: 'திருப்பாவை', author: 'Andal', desc: '30 himne pemujaan kepada Dewa Vishnu oleh penyair suci Andal', verse: 'Narayana Narayana — நாராயண நாராயண', color: '#3b82f6' },
    { name: 'Tirumantiram', tamil: 'திருமந்திரம்', author: 'Tirumular', desc: 'Teks yoga dan filsafat Shaiva Siddhanta dalam 3000 syair', verse: 'Anbe Sivam — அன்பே சிவம் — Cinta adalah Shiva', color: '#10b981' },
    { name: 'Kanda Puranam', tamil: 'கந்த புராணம்', author: 'Kachiyappa Sivachariyar', desc: 'Kisah epik Dewa Murugan dalam tradisi Shaiva Tamil', verse: 'Om Saravanabhava — ஓம் சரவணபவ', color: '#f97316' },
    { name: 'Silappathikaram', tamil: 'சிலப்பதிகாரம்', author: 'Ilango Adigal', desc: 'Epik Tamil klasik tentang keadilan dan pengabdian, salah satu dari 5 epik besar', verse: 'Aram seya virumbu — அறம் செய விரும்பு', color: '#ec4899' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f0a00, #1a0a00, #0a0f1a)', color: '#f5e6c8'}}>
      <nav style={{background: 'rgba(124,45,0,0.9)', borderBottom: '2px solid #f59e0b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#fbbf24', fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: '#fcd34d', fontSize: 14}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fcd34d', fontSize: 14}}>Festival</a>
          <a href="/prayer" style={{color: '#fcd34d', fontSize: 14}}>Doa</a>
        </div>
      </nav>

      <div style={{padding: '40px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h1 style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>📖 Kitab Suci Tamil</h1>
          <p style={{color: '#9ca3af'}}>Warisan sastra dan spiritual Hindu Tamil sepanjang masa</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 700, margin: '0 auto'}}>
          {scriptures.map((s, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.05)', border: `1px solid ${s.color}55`, borderRadius: 12, padding: 24, borderLeft: `4px solid ${s.color}`}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <h2 style={{color: s.color, fontSize: 20, fontWeight: 'bold'}}>{s.name}</h2>
                <span style={{background: `${s.color}22`, color: s.color, padding: '4px 10px', borderRadius: 20, fontSize: 11}}>✍️ {s.author}</span>
              </div>
              <p style={{color: '#fb923c', marginBottom: 10, fontSize: 14}}>{s.tamil}</p>
              <p style={{color: '#d1d5db', fontSize: 14, lineHeight: 1.6, marginBottom: 12}}>{s.desc}</p>
              <div style={{background: 'rgba(0,0,0,0.3)', padding: '10px 16px', borderRadius: 8}}>
                <p style={{color: '#fcd34d', fontSize: 13, fontStyle: 'italic'}}>"{s.verse}"</p>
              </div>
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
