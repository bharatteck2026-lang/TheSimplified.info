import Link from "next/link";
import Image from "next/image";
import CanvasBackground from "@/components/CanvasBackground";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section id="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 0, overflow: 'hidden' }}>

        <CanvasBackground />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '60px' }}>
          <h1 className="hero-text-entry"
            style={{ fontSize: '4rem', marginBottom: '20px', lineHeight: 1.1, opacity: 0, color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            Visuals That Speak<br />
            <span style={{ color: 'var(--accent-gold)' }}>Louder.</span>
          </h1>
          <p className="hero-tag-entry"
            style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', fontWeight: 300, opacity: 0 }}>
            Your next big project is just one call away!</p>
          <div className="hero-cta-entry" style={{ opacity: 0 }}>
            <Link href="/portfolio" className="btn">View Our Work</Link>
            <Link href="/contact" className="btn btn-outline"
              style={{ marginLeft: '15px', color: '#fff', borderColor: '#fff' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES TEASER */}
      <section className="bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>What We Do</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gold)', margin: '20px auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} id="services-grid">
            <div className="service-box vibe-hidden"
              style={{ background: '#fff', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', overflow: 'hidden' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Image src="/service-video.png" alt="Video Production" width={400} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <h3>Video Production</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '15px' }}>Commercials, documentaries, and brand
                  films crafted with cinematic precision.</p>
              </div>
            </div>
            <div className="service-box vibe-hidden"
              style={{ background: '#fff', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', overflow: 'hidden' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Image src="/service-photo.png" alt="Photography" width={400} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <h3>Photography</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '15px' }}>High-impact editorial and product
                  photography that defines your visual identity.</p>
              </div>
            </div>
            <div className="service-box vibe-hidden"
              style={{ background: '#fff', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', overflow: 'hidden' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Image src="/service-edit.png" alt="Post Production" width={400} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <h3>Post-Production</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '15px' }}>Expert color grading, editing, and
                  VFX to polish raw footage into masterpieces.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/services" className="btn-outline" style={{ padding: '12px 30px', fontSize: '14px' }}>View All
              Services</Link>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="bg-light" style={{ padding: '60px 0', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h4
            style={{ color: 'var(--text-secondary)', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Trusted By Industry Leaders</h4>

          <div className="slider">
            <div className="slide-track">
              {/* Original 9 Logos + Duplicates. Mapping for cleaner code? */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
                <div className="slide" key={i}>
                  <Image src={`/client-${num}.png`} alt="Client Logo" width={200} height={100} style={{ height: '70px', width: 'auto' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={{ background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '50px' }}>Client Stories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            <div className="vibe-hidden"
              style={{ textAlign: 'left', background: 'var(--bg-light)', padding: '40px', borderLeft: '4px solid var(--accent-gold)' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '20px' }}>&quot;Twice as good as any agency
                we&apos;ve worked with before. The attention to detail in the color grading was phenomenal.&quot;</p>
              <h4 style={{ marginBottom: '5px' }}>Sarah Jenkins</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Marketing Director, LuxBrand</p>
            </div>
            <div className="vibe-hidden"
              style={{ textAlign: 'left', background: 'var(--bg-light)', padding: '40px', borderLeft: '4px solid var(--accent-gold)' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '20px' }}>&quot;Simplified Media turned our
                vague concept into a stunning visual reality. Highly professional team.&quot;</p>
              <h4 style={{ marginBottom: '5px' }}>David Chen</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Founder, TechStream</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
