import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";

export const metadata = {
    title: "About Us | Simplified Media Studio",
};

export default function About() {
    return (
        <main>
            <section className="bg-light page-header">
                <div className="container">
                    <h1>Our Story</h1>
                    <p className="sub-text">Founded on the belief that every brand has a cinematic story waiting to be told.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="service-row">
                        <div className="vibe-hidden service-img-col">
                            {/* Using external image from original HTML */}
                            <Image
                                src="/images/team.png"
                                alt="Our Team"
                                width={600}
                                height={400}
                                className="service-main-img"
                            />
                        </div>
                        <div className="vibe-hidden service-text-col">
                            <h2 className="service-headline">Jalna&apos;s Leading Creative Agency</h2>
                            <p className="service-desc">
                                At Simplified Media Studio, we don&apos;t just capture moments; we create legacies. Positioned as the
                                premier branding and production house in Jalna, we blend technical expertise with artistic vision to deliver content that stands out.
                            </p>
                            <p className="service-desc">
                                <strong>Our Mission:</strong> To turn your raw ideas into impactful visuals that drive engagement, build trust, and tell your unique story to the world.
                            </p>

                            <StatsCounter />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
