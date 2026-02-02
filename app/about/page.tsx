import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";

export const metadata = {
    title: "About Us | Simplified Media Studio",
};

export default function About() {
    return (
        <main>
            <section className="bg-light" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Our Story</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto', color: 'var(--text-secondary)' }}>Founded on the belief that
                        every brand has a cinematic story waiting to be told.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div className="vibe-hidden">
                            {/* Using external image from original HTML */}
                            <Image
                                src="/images/team.png"
                                alt="Our Team"
                                width={600}
                                height={400}
                                style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className="vibe-hidden">
                            <h2 style={{ marginBottom: '20px' }}>Jalna&apos;s Leading Creative Agency</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                At Simplified Media Studio, we don&apos;t just capture moments; we create legacies. Positioned as the
                                premier
                                branding and production house in Jalna, we blend technical expertise with artistic vision to
                                deliver
                                content that stands out.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                <strong>Our Mission:</strong> To turn your raw ideas into impactful visuals that drive
                                engagement,
                                build trust, and tell your unique story to the world.
                            </p>

                            <StatsCounter />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
