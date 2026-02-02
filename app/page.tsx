import Link from "next/link";
import Image from "next/image";
import CanvasBackground from "@/components/CanvasBackground";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section id="hero" className="hero-section">
        <CanvasBackground />

        <div className="container hero-container">
          <h1 className="hero-text-entry hero-title">
            Visuals That Speak<br />
            <span className="accent-text">Louder.</span>
          </h1>
          <p className="hero-tag-entry hero-subtitle">
            Your next big project is just one call away!
          </p>
          <div className="hero-cta-entry">
            <Link href="/portfolio" className="btn">View Our Work</Link>
            <Link href="/contact" className="btn btn-outline hero-btn-outline">Get a Quote</Link>
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

          <div className="services-grid" id="services-grid">
            <div className="service-box vibe-hidden">
              <div className="service-image-wrapper">
                <Image src="/service-video.png" alt="Video Production" width={400} height={200} className="responsive-image" priority />
              </div>
              <div className="service-content">
                <h3>Video Production</h3>
                <p>Commercials, documentaries, and brand films crafted with cinematic precision.</p>
              </div>
            </div>
            <div className="service-box vibe-hidden">
              <div className="service-image-wrapper">
                <Image src="/service-photo.png" alt="Photography" width={400} height={200} className="responsive-image" />
              </div>
              <div className="service-content">
                <h3>Photography</h3>
                <p>High-impact editorial and product photography that defines your visual identity.</p>
              </div>
            </div>
            <div className="service-box vibe-hidden">
              <div className="service-image-wrapper">
                <Image src="/service-edit.png" alt="Post Production" width={400} height={200} className="responsive-image" />
              </div>
              <div className="service-content">
                <h3>Post-Production</h3>
                <p>Expert color grading, editing, and VFX to polish raw footage into masterpieces.</p>
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
          <div className="testimonial-grid">
            <div className="vibe-hidden testimonial-card">
              <p className="testimonial-text">&quot;Twice as good as any agency we&apos;ve worked with before. The attention to detail in the color grading was phenomenal.&quot;</p>
              <h4 className="testimonial-author">Sarah Jenkins</h4>
              <p className="testimonial-role">Marketing Director, LuxBrand</p>
            </div>
            <div className="vibe-hidden testimonial-card">
              <p className="testimonial-text">&quot;Simplified Media turned our vague concept into a stunning visual reality. Highly professional team.&quot;</p>
              <h4 className="testimonial-author">David Chen</h4>
              <p className="testimonial-role">Founder, TechStream</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
