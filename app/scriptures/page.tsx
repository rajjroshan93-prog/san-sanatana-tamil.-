export default function ScripturesPage() {
  const scriptures = [
    { name: 'Thirukkural', tamil: 'திருக்குறள்', author: 'Thiruvalluvar', desc: 'Karya sastra klasik Tamil berisi 1330 kuplet tentang etika, politik, dan cinta', verse: 'Uyirae uyirae — Jiwa adalah jiwa dari jiwa', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { name: 'Tevaram', tamil: 'தேவாரம்', author: 'Nayanmars', desc: 'Kumpulan himne suci untuk Dewa Shiva, bagian dari Tirumurai', verse: 'Namah Shivaya — சிவாய நம', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { name: 'Thiruppavai', tamil: 'திருப்பாவை', author: 'Andal', desc: '30 himne pemujaan kepada Dewa Vishnu oleh penyair suci Andal', verse: 'Narayana Narayana — நாராயண நாராயண', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    { name: 'Tirumantiram', tamil: 'திருமந்திரம்', author: 'Tirumular', desc: 'Teks yoga dan filsafat Shaiva Siddhanta dalam 3000 syair', verse: 'Anbe Sivam — அன்பே சிவம் — Cinta adalah Shiva', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { name: 'Kanda Puranam', tamil: 'கந்த புராணம்', author: 'Kachiyappa Sivachariyar', desc: 'Kisah epik Dewa Murugan dalam tradisi Shaiva Tamil', verse: 'Om Saravanabhava — ஓம் சரவணபவ', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
    { name: 'Silappathikaram', tamil: 'சிலப்பதிகாரம்', author: 'Ilango Adigal', desc: 'Epik Tamil klasik tentang keadilan dan pengabdian', verse: 'Aram seya virumbu — அறம் செய விரும்பு', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(145deg, #050208 0%, #0d0618 30%, #120a00 60%, #050208 100%)', color: '#f5e6c8', fontFamily: 'Georgia, serif', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'fixed', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,83,9,0.15) 0%, transparent 70%)', pointerEvents: 'none'}} />

      <nav style={{background: 'rgba(10,5,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(245,158,11,0.3)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100}}>
        <a href="/" style={{background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 22, fontWeight: 'bold', letterSpacing: 1, textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Festival</a>
          <a href="/prayer" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none'}}>Doa</a>
          <a href="/scriptures" style={{color: '#fbbf24', fontSize: 14, textDecoration: 'none'}}>Kitab</a>
        </div>
      </nav>

      <div style={{padding: '60px 24px 40px', textAlign: 'center'}}>
        <h1 style={{fontSize: 'clamp(28px,5vw,48px)', fontWeight: 'bold', background: 'linear-gradient(135deg, #fbbf24, #fde68a, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12, letterSpacing: 2}}>📖 Kitab Suci Tamil</h1>
        <p style={{color: 'rgba(156,163,175,0.8)', letterSpacing: 1}}>Warisan sastra dan spiritual Hindu Tamil sepanjang masa</p>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 16, marginTop: 24}}>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #f59e0b)'}} />
          <span style={{color: '#f59e0b', fontSize: 16}}>✦</span>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, #f59e0b, transparent)'}} />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 20, padding: '0 32px 80px', maxWidth: 700, margin: '0 auto'}}>
        {scriptures.map((s, i) => (
          <div key={i} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'}}>
            <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: s.gradient}} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, paddingLeft: 8}}>
              <h2 style={{background: s.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 20, fontWeight: 'bold'}}>{s.name}</h2>
              <span style={{background: 'rgba(245,158,11,0.15)', color: '#fbbf24', padding: '4px 12px', borderRadius: 20, fontSize: 11, border: '1px solid rgba(245,158,11,0.3)'}}>✍️ {s.author}</span>
            </div>
            <p style={{color: '#fb923c', fontSize: 14, marginBottom: 10, paddingLeft: 8, letterSpacing: 1}}>{s.tamil}</p>
            <p style={{color: 'rgba(209,213,219,0.8)', fontSize: 14, lineHeight: 1.6, marginBottom: 12, paddingLeft: 8}}>{s.desc}</p>
            <div style={{background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(245,158,11,0.1)'}}>
              <p style={{color: '#fcd34d', fontSize: 13, fontStyle: 'italic'}}>"{s.verse}"</p>
            </div>
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
