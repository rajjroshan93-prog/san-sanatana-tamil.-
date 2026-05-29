export default function Home() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, #0f0a00, #1a0a00, #0a0f1a)'}}>
      {/* Navbar */}
      <nav style={{background: 'rgba(124,45,0,0.9)', borderBottom: '2px solid #f59e0b', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{color: '#fbbf24', fontSize: 20, fontWeight: 'bold'}}>ॐ San Sanatana Tamil</div>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: '#fcd34d', fontSize: 14}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: '#fcd34d', fontSize: 14}}>Festival</a>
          <a href="/prayer" style={{color: '#fcd34d', fontSize: 14}}>Doa</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{textAlign: 'center', padding: '80px 24px', color: '#f5e6c8'}}>
        <div style={{fontSize: 64, marginBottom: 16, color: '#fbbf24'}}>ॐ</div>
        <h1 style={{fontSize: 'clamp(28px,6vw,56px)', fontWeight: 'bold', color: '#fbbf24', marginBottom: 8}}>San Sanatana Tamil</h1>
        <p style={{fontSize: 20, color: '#fb923c', marginBottom: 8}}>சன் சனாதன தமிழ்</p>
        <p style={{fontSize: 16, color: '#d1d5db', marginBottom: 40}}>Aplikasi Spiritual Hindu Tamil — Doa, Festival, Kitab Suci</p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/deities" style={{background: '#b45309', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 'bold', textDecoration: 'none'}}>Jelajahi Dewa-Dewi</a>
          <a href="/prayer" style={{border: '2px solid #f59e0b', color: '#fbbf24', padding: '14px 32px', borderRadius: 8, fontWeight: 'bold', textDecoration: 'none'}}>Doa Harian</a>
        </div>
      </div>

      {/* Feature Cards */}
      <div style={{display: 'flex', gap: 20, padding: '0 24px 80px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {[
          {icon: '🕉️', title: 'Dewa-Dewi', desc: 'Murugan, Shiva, Shakti & lebih', href: '/deities'},
          {icon: '📅', title: 'Festival Tamil', desc: 'Thaipusam, Deepavali & lebih', href: '/festivals'},
          {icon: '🙏', title: 'Doa Harian', desc: 'Mantra & sloka harian', href: '/prayer'},
          {icon: '📖', title: 'Kitab Suci', desc: 'Thirukkural, Tevaram & lebih', href: '/scriptures'},
        ].map((item, i) => (
          <a key={i} href={item.href} style={{background: 'rgba(255,255,255,0.05)', border: '1px solid #78350f', borderRadius: 12, padding: '24px', width: 200, textAlign: 'center', textDecoration: 'none', color: '#f5e6c8'}}>
            <div style={{fontSize: 40, marginBottom: 12}}>{item.icon}</div>
            <h3 style={{color: '#fbbf24', marginBottom: 8, fontWeight: 'bold'}}>{item.title}</h3>
            <p style={{color: '#9ca3af', fontSize: 14}}>{item.desc}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
