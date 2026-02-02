import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact | Simplified Media Studio",
    description: "Contact Simplified Media Studio for your next video production or photography project. We are ready to bring your vision to life.",
    keywords: "Contact Video Agency, Hire Photographer, Video Production Quote, Studio City",
};

export default function Contact() {
    return (
        <main>
            <section className="bg-light" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto', color: 'var(--text-secondary)' }}>Ready to start your project?
                        We&apos;d love to hear from you.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
                        <div className="vibe-hidden">
                            <h3 style={{ marginBottom: '30px' }}>Contact Information</h3>
                            <div style={{ marginBottom: '40px' }}>
                                <p style={{ fontWeight: 700, marginBottom: '5px' }}>Headquarters</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Ambad Road, Jalna, India, Maharashtra</p>
                            </div>
                            <div style={{ marginBottom: '40px' }}>
                                <p style={{ fontWeight: 700, marginBottom: '5px' }}>Direct Line</p>
                                <p style={{ color: 'var(--text-secondary)' }}><a href="tel:+918847788181">+91 88477 88181</a></p>
                            </div>
                            <div style={{ marginBottom: '40px' }}>
                                <p style={{ fontWeight: 700, marginBottom: '5px' }}>Email</p>
                                <p style={{ color: 'var(--text-secondary)' }}><a
                                    href="mailto:thesimplified.info@gmail.com">thesimplified.info@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="vibe-hidden">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
