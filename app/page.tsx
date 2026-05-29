export default function Home() {
  const features = [
    { icon: '🕉️', title: 'Dewa-Dewi', desc: 'Murugan, Shiva, Shakti & lebih', href: '/deities', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { icon: '📅', title: 'Festival Tamil', desc: 'Thaipusam, Deepavali & lebih', href: '/festivals', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { icon: '🙏', title: 'Doa Harian', desc: 'Mantra & sloka harian', href: '/prayer', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    { icon: '📖', title: 'Kitab Suci', desc: 'Thirukkural, Tevaram & lebih', href: '/scriptures', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
  ]

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #050208 0%, #0d0618 30%, #120a00 60%, #050208 100%)',
      color: '#f5e6c8',
      fontFamily: 'Georgia, serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{position: 'fixed', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,83,9,0.15) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{position: 'fixed', bottom: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)', pointerEvents: 'none'}} />

      <nav style={{
        background: 'rgba(10,5,0,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(245,158,11,0.3)',
        padding: '18px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: 22,
          fontWeight: 'bold',
          letterSpacing: 1,
        }}>ॐ San Sanatana Tamil</div>
        <div style={{display: 'flex', gap: 20}}>
          <a href="/deities" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none', letterSpacing: 0.5}}>Dewa-Dewi</a>
          <a href="/festivals" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none', letterSpacing: 0.5}}>Festival</a>
          <a href="/prayer" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none', letterSpacing: 0.5}}>Doa</a>
          <a href="/scriptures" style={{color: 'rgba(252,211,77,0.7)', fontSize: 14, textDecoration: 'none', letterSpacing: 0.5}}>Kitab</a>
        </div>
      </nav>

      <div style={{textAlign: 'center', padding: '100px 24px 60px'}}>
        <div style={{
          fontSize: 80,
          marginBottom: 20,
          background: 'linear-gradient(180deg, #fbbf24, #f59e0b, #b45309)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.5))',
        }}>ॐ</div>

        <h1 style={{
          fontSize: 'clamp(32px,6vw,64px)',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #fbbf24 0%, #fde68a 50%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 12,
          letterSpacing: 2,
        }}>San Sanatana Tamil</h1>

        <p style={{fontSize: 22, color: '#fb923c', marginBottom: 12, letterSpacing: 3}}>சன் சனாதன தமிழ்</p>
        <p style={{fontSize: 16, color: 'rgba(209,213,219,0.7)', marginBottom: 50, letterSpacing: 1}}>Aplikasi Spiritual Hindu Tamil — Doa · Festival · Kitab Suci</p>

        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/deities" style={{
            background: 'linear-gradient(135deg, #b45309, #d97706, #f59e0b)',
            color: '#fff',
            padding: '16px 40px',
            borderRadius: 50,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 15,
            boxShadow: '0 0 30px rgba(245,158,11,0.4)',
            letterSpacing: 1,
          }}>Jelajahi Dewa-Dewi</a>
          <a href="/prayer" style={{
            background: 'transparent',
            color: '#fbbf24',
            padding: '16px 40px',
            borderRadius: 50,
            fontWeight: 'bold',
            textDecoration: 'none',
            border: '1px solid rgba(245,158,11,0.5)',
            fontSize: 15,
            letterSpacing: 1,
          }}>Doa Harian</a>
        </div>
      </div>

      <div style={{textAlign: 'center', marginBottom: 40}}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #f59e0b)'}} />
          <span style={{color: '#f59e0b', fontSize: 20}}>✦</span>
          <div style={{width: 60, height: 1, background: 'linear-gradient(90deg, #f59e0b, transparent)'}} />
        </div>
      </div>

      <div style={{display: 'flex', gap: 24, padding: '0 32px 80px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {features.map((f, i) => (
          <a key={i} href={f.href} style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: 20,
            padding: 32,
            width: 200,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#f5e6c8',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: f.gradient}} />
            <div style={{fontSize: 44, marginBottom: 16}}>{f.icon}</div>
            <h3 style={{
              background: f.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 8,
            }}>{f.title}</h3>
            <p style={{color: 'rgba(156,163,175,0.8)', fontSize: 13}}>{f.desc}</p>
          </a>
        ))}
      </div>

      <div style={{textAlign: 'center', padding: '20px', borderTop: '1px solid rgba(245,158,11,0.15)', color: 'rgba(120,83,15,0.6)', fontSize: 12, letterSpacing: 2}}>
        ॐ நமசிவாய • SAN SANATANA TAMIL ॐ
      </div>
    </main>
  )
}
