import Image from "next/image";

export const metadata = {
    title: "Services | Simplified Media Studio",
};

export default function Services() {
    return (
        <main>
            <section className="bg-light page-header">
                <div className="container">
                    <h1>Our Expertise</h1>
                    <p className="sub-text">Comprehensive media solutions tailored to your unique requirements.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    {/* Service 1 */}
                    <div className="service-row vibe-hidden">
                        <div className="service-img-col">
                            <Image src="/service-video.png" alt="Video Production" width={600} height={400} className="service-main-img" />
                        </div>
                        <div className="service-text-col">
                            <h2 className="service-label">Video Production</h2>
                            <h3 className="service-headline">Bring Your Brand to Life</h3>
                            <p className="service-desc">From script to screen, we handle every aspect of the production process. Whether it&apos;s a 30-second spot for TV or a 10-minute brand documentary for the web, we bring cinematic quality to every frame.</p>
                            <ul className="service-list">
                                <li>Commercials & TVcs</li>
                                <li>Corporate Interviews</li>
                                <li>Event Coverage</li>
                                <li>Product Demos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-row service-row-reverse vibe-hidden">
                        <div className="service-img-col">
                            <Image src="/service-photo.png" alt="Photography" width={600} height={400} className="service-main-img" />
                        </div>
                        <div className="service-text-col">
                            <h2 className="service-label">Photography</h2>
                            <h3 className="service-headline">Capture the Perfect Moment</h3>
                            <p className="service-desc">Our photography team specializes in creating high-end imagery that speaks volumes. We focus on lighting, composition, and emotion to deliver photos that stand out in a crowded feed.</p>
                            <ul className="service-list">
                                <li>Editorial & Fashion</li>
                                <li>Product & E-commerce</li>
                                <li>Corporate Headshots</li>
                                <li>Architecture & Real Estate</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-row vibe-hidden">
                        <div className="service-img-col">
                            <Image src="/service-edit.png" alt="Post Production" width={600} height={400} className="service-main-img" />
                        </div>
                        <div className="service-text-col">
                            <h2 className="service-label">Post-Production</h2>
                            <h3 className="service-headline">Polishing the Diamond</h3>
                            <p className="service-desc">Our editing suites are where the magic happens. We use industry-standard tools to edit, color grade, and mix sound, ensuring your final product is nothing short of perfection.</p>
                            <ul className="service-list">
                                <li>Color Grading (DaVinci Resolve)</li>
                                <li>Visual Effects & Motion Graphics</li>
                                <li>Sound Design & Mixing</li>
                                <li>Format Conversion</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service-row service-row-reverse vibe-hidden">
                        <div className="service-img-col">
                            <Image src="/images/social.png" alt="Social Media" width={600} height={400} className="service-main-img" />
                        </div>
                        <div className="service-text-col">
                            <h2 className="service-label">Social Media Management</h2>
                            <h3 className="service-headline">Engage & Grow</h3>
                            <p className="service-desc">We create short-form content designed to stop the scroll. From reels to stories, we manage your visual presence across all platforms.</p>
                            <ul className="service-list">
                                <li>Instagram Reels & TikToks</li>
                                <li>Content Strategy</li>
                                <li>Platform Management</li>
                                <li>Analytics & Reporting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="service-row vibe-hidden">
                        <div className="service-img-col">
                            <Image src="/thumb-corporate.png" alt="Drone Cinematography" width={600} height={400} className="service-main-img" />
                        </div>
                        <div className="service-text-col">
                            <h2 className="service-label">Drone Cinematography</h2>
                            <h3 className="service-headline">Sky-High Perspectives</h3>
                            <p className="service-desc">Capture breathtaking aerial views with our certified drone pilots. Perfect for real estate, events, and cinematic landscape shots.</p>
                            <ul className="service-list">
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
                    <div className="process-grid">
                        <div className="vibe-hidden process-step">
                            <div className="step-num">1</div>
                            <h3>Discovery</h3>
                            <p>We sit down with you to understand your brand, your goals, and your audience. We script, storyboard, and plan every detail.</p>
                        </div>
                        <div className="vibe-hidden process-step">
                            <div className="step-num">2</div>
                            <h3>Production</h3>
                            <p>Lights, camera, action. Our crew executes the vision using top-tier equipment and techniques to capture stunning raw material.</p>
                        </div>
                        <div className="vibe-hidden process-step">
                            <div className="step-num">3</div>
                            <h3>Delivery</h3>
                            <p>Refining footage in post-production to deliver a final product that exceeds expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
