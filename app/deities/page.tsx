export default function DeitiesPage() {
  const deities = [
    { name: 'Murugan', tamil: 'முருகன்', desc: 'Dewa Perang & Kebijaksanaan', color: '#f59e0b', icon: '🪔' },
    { name: 'Shiva', tamil: 'சிவன்', desc: 'Dewa Penghancur & Transformasi', color: '#8b5cf6', icon: '🕉️' },
    { name: 'Shakti', tamil: 'சக்தி', desc: 'Dewi Kekuatan & Energi', color: '#ef4444', icon: '🌺' },
    { name: 'Vishnu', tamil: 'விஷ்ணு', desc: 'Dewa Pemelihara Alam Semesta', color: '#3b82f6', icon: '🐚' },
    { name: 'Ganesha', tamil: 'கணேஷ்', desc: 'Dewa Kebijaksanaan & Awal Baru', color: '#f97316', icon: '🐘' },
    { name: 'Lakshmi', tamil: 'லக்ஷ்மி', desc: 'Dewi Kemakmuran & Kecantikan', color: '#ec4899', icon: '🌸' },
  ]

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0f0a00, #1a0a00, #0a0f1a)', color: '#f5e6c8'}}>
      <nav style={{background: 'rgba(124,45,0,0.9)', borderBottom: '2px solid #f59e0b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="/" style={{color: '#fbbf24', fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}}>ॐ San Sanatana Tamil</a>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: '#fbbf24', fontSize: 14}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fcd34d', fontSize: 14}}>Festival</a>
          <a href="/prayer" style={{color: '#fcd34d', fontSize: 14}}>Doa</a>
        </div>
      </nav>

      <div style={{padding: '40px 24px'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h1 style={{fontSize: 32, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>🕉️ Dewa-Dewi Hindu Tamil</h1>
          <p style={{color: '#9ca3af'}}>Kenali para Dewa & Dewi dalam tradisi Hindu Tamil</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto'}}>
          {deities.map((deity, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.05)', border: `1px solid ${deity.color}55`, borderRadius: 12, padding: 24, borderTop: `3px solid ${deity.color}`}}>
              <div style={{fontSize: 48, marginBottom: 12, textAlign: 'center'}}>{deity.icon}</div>
              <h2 style={{color: deity.color, fontSize: 22, fontWeight: 'bold', marginBottom: 4, textAlign: 'center'}}>{deity.name}</h2>
              <p style={{color: '#fb923c', textAlign: 'center', marginBottom: 8, fontSize: 16}}>{deity.tamil}</p>
              <p style={{color: '#d1d5db', textAlign: 'center', fontSize: 14}}>{deity.desc}</p>
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
