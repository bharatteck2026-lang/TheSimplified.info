import Image from "next/image";

export const metadata = {
    title: "Portfolio | Simplified Media Studio",
};

export default function Portfolio() {
    return (
        <main>
            <section className="bg-light page-header">
                <div className="container">
                    <h1>Selected Works</h1>
                    <p className="sub-text">A collection of our finest moments in filmmaking and photography.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="gallery-grid">
                        {/* Item 1 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/images/artisan.png"
                                alt="Rural Artisan"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>The Artisan</h3>
                                <p className="overlay-tag">Documentary</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/images/harvest.png"
                                alt="Indian Fields"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Harvest Gold</h3>
                                <p className="overlay-tag">Cinematic Landscape</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/images/colors.png"
                                alt="Vibrant Culture"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Colors of India</h3>
                                <p className="overlay-tag">Cultural Brand Film</p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/thumb-luxury.png"
                                alt="Traditional Wedding"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Royal Union</h3>
                                <p className="overlay-tag">Wedding Film</p>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/images/faces.png"
                                alt="Rural Portrait"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Faces of Jalna</h3>
                                <p className="overlay-tag">Portrait Series</p>
                            </div>
                        </div>
                        {/* Item 6 */}
                        <div className="gallery-item vibe-hidden">
                            <Image
                                src="/thumb-corporate.png"
                                alt="Aerial Shot"
                                fill
                                className="gallery-image"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <h3>Sky High</h3>
                                <p className="overlay-tag">Drone Cinematography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
