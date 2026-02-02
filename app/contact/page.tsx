import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact | Simplified Media Studio",
    description: "Contact Simplified Media Studio for your next video production or photography project. We are ready to bring your vision to life.",
    keywords: "Contact Video Agency, Hire Photographer, Video Production Quote, Studio City",
};

export default function Contact() {
    return (
        <main>
            <section className="bg-light page-header">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p className="sub-text">Ready to start your project? We&apos;d love to hear from you.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="contact-grid">
                        <div className="vibe-hidden contact-info">
                            <h3 className="contact-headline">Contact Information</h3>
                            <div className="contact-item">
                                <p className="contact-label">Headquarters</p>
                                <p className="contact-detail">Ambad Road, Jalna, India, Maharashtra</p>
                            </div>
                            <div className="contact-item">
                                <p className="contact-label">Direct Line</p>
                                <p className="contact-detail"><a href="tel:+918847788181">+91 88477 88181</a></p>
                            </div>
                            <div className="contact-item">
                                <p className="contact-label">Email</p>
                                <p className="contact-detail"><a href="mailto:thesimplified.info@gmail.com">thesimplified.info@gmail.com</a></p>
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
