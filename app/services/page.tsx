import Image from "next/image";

export const metadata = {
    title: "Services | Simplified Media Studio",
};

export default function Services() {
    return (
        <main>
            <section className="bg-light" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Our Expertise</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto', color: 'var(--text-secondary)' }}>Comprehensive media solutions
                        tailored to your unique requirements.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    {/* Service 1 */}
                    <div className="service-row vibe-hidden"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <Image src="/service-video.png" alt="Video Production"
                                width={600} height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--accent-gold)' }}>Video Production</h2>
                            <h3 style={{ margin: '10px 0 20px' }}>Bring Your Brand to Life</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>From script to screen, we handle every
                                aspect of the production process. Whether it&apos;s a 30-second spot for TV or a 10-minute brand
                                documentary for the web, we bring cinematic quality to every frame.</p>
                            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', listStyle: 'disc', marginBottom: '20px' }}>
                                <li>Commercials & TVcs</li>
                                <li>Corporate Interviews</li>
                                <li>Event Coverage</li>
                                <li>Product Demos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-row vibe-hidden"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', direction: 'rtl', textAlign: 'left', marginBottom: '80px' }}>
                        <div>
                            <Image src="/service-photo.png" alt="Photography"
                                width={600} height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }} />
                        </div>
                        <div style={{ direction: 'ltr' }}>
                            <h2 style={{ color: 'var(--accent-gold)' }}>Photography</h2>
                            <h3 style={{ margin: '10px 0 20px' }}>Capture the Perfect Moment</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Our photography team specializes in
                                creating high-end imagery that speaks volumes. We focus on lighting, composition, and emotion to
                                deliver photos that stand out in a crowded feed.</p>
                            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', listStyle: 'disc', marginBottom: '20px' }}>
                                <li>Editorial & Fashion</li>
                                <li>Product & E-commerce</li>
                                <li>Corporate Headshots</li>
                                <li>Architecture & Real Estate</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-row vibe-hidden"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <Image src="/service-edit.png" alt="Post Production"
                                width={600} height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--accent-gold)' }}>Post-Production</h2>
                            <h3 style={{ margin: '10px 0 20px' }}>Polishing the Diamond</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Our editing suites are where the magic
                                happens. We use industry-standard tools to edit, color grade, and mix sound, ensuring your final
                                product is nothing short of perfection.</p>
                            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', listStyle: 'disc', marginBottom: '20px' }}>
                                <li>Color Grading (DaVinci Resolve)</li>
                                <li>Visual Effects & Motion Graphics</li>
                                <li>Sound Design & Mixing</li>
                                <li>Format Conversion</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service-row vibe-hidden"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', direction: 'rtl', textAlign: 'left', marginBottom: '80px' }}>
                        <div>
                            <Image src="/images/social.png"
                                alt="Social Media"
                                width={600} height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }} />
                        </div>
                        <div style={{ direction: 'ltr' }}>
                            <h2 style={{ color: 'var(--accent-gold)' }}>Social Media Management</h2>
                            <h3 style={{ margin: '10px 0 20px' }}>Engage & Grow</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>We create short-form content designed
                                to stop the scroll. From reels to stories, we manage your visual presence across all platforms.
                            </p>
                            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', listStyle: 'disc', marginBottom: '20px' }}>
                                <li>Instagram Reels & TikToks</li>
                                <li>Content Strategy</li>
                                <li>Platform Management</li>
                                <li>Analytics & Reporting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="service-row vibe-hidden"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <Image src="/thumb-corporate.png"
                                alt="Drone Cinematography"
                                width={600} height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--accent-gold)' }}>Drone Cinematography</h2>
                            <h3 style={{ margin: '10px 0 20px' }}>Sky-High Perspectives</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Capture breathtaking aerial views with
                                our certified drone pilots. Perfect for real estate, events, and cinematic landscape shots.</p>
                            <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', listStyle: 'disc', marginBottom: '20px' }}>
                                <li>4K Aerial Video</li>
                                <li>Real Estate Surveys</li>
                                <li>Event Bird&apos;s-Eye View</li>
                                <li>FPV Dynamic Shots</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-light" id="process">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '60px' }}>The Process</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <div className="vibe-hidden">
                            <div
                                style={{ width: '60px', height: '60px', background: 'var(--accent-gold)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, margin: '0 auto 20px' }}>
                                1</div>
                            <h3>Discovery</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We sit down with you to understand your
                                brand, your goals, and your audience. We script, storyboard, and plan every detail.</p>
                        </div>
                        <div className="vibe-hidden">
                            <div
                                style={{ width: '60px', height: '60px', background: 'var(--accent-gold)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, margin: '0 auto 20px' }}>
                                2</div>
                            <h3>Production</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lights, camera, action. Our crew
                                executes the vision using top-tier equipment and techniques to capture stunning raw material.
                            </p>
                        </div>
                        <div className="vibe-hidden">
                            <div
                                style={{ width: '60px', height: '60px', background: 'var(--accent-gold)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, margin: '0 auto 20px' }}>
                                3</div>
                            <h3>Delivery</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Refining footage in post-production to
                                deliver a final product that exceeds expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
