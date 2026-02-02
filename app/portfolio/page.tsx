import Image from "next/image";

export const metadata = {
    title: "Portfolio | Simplified Media Studio",
};

export default function Portfolio() {
    return (
        <main>
            <section className="bg-light" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Selected Works</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto', color: 'var(--text-secondary)' }}>A collection of our finest
                        moments in filmmaking and photography.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {/* Item 1 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/images/artisan.png"
                                alt="Rural Artisan"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>The Artisan</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Documentary</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/images/harvest.png"
                                alt="Indian Fields"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Harvest Gold</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Cinematic Landscape</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/images/colors.png"
                                alt="Vibrant Culture"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Colors of India</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Cultural Brand Film</p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/thumb-luxury.png"
                                alt="Traditional Wedding"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Royal Union</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Wedding Film</p>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/images/faces.png"
                                alt="Rural Portrait"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Faces of Jalna</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Portrait Series</p>
                            </div>
                        </div>
                        {/* Item 6 */}
                        <div className="gallery-item vibe-hidden" style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}>
                            <Image
                                src="/thumb-corporate.png"
                                alt="Aerial Shot"
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Sky High</h3>
                                <p style={{ color: 'var(--accent-gold)' }}>Drone Cinematography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
