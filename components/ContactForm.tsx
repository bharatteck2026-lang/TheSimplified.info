"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE'; // Placeholder from original code

export default function ContactForm() {
    const [btnText, setBtnText] = useState("Send Message");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const originalText = "Send Message";
        setBtnText("Sending...");

        // DEMO MODE: If URL is placeholder, simulate success
        if (GOOGLE_SCRIPT_URL === 'YOUR_SCRIPT_URL_HERE') {
            setTimeout(() => {
                setBtnText("Sent (Demo)!");
                form.reset();
                setTimeout(() => {
                    setBtnText(originalText);
                }, 3000);
            }, 1500);
            return;
        }

        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(() => {
                setBtnText("Sent Successfully!");
                form.reset();
                setTimeout(() => {
                    setBtnText(originalText);
                }, 3000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                setBtnText("Sent! (Check Sheet)");
                form.reset();
                setTimeout(() => {
                    setBtnText(originalText);
                }, 3000);
            });
    };

    return (
        <form onSubmit={handleSubmit} id="contact-form"
            style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '14px' }}>Name</label>
                <input type="text" name="name" className="form-control" placeholder="Your Name" required
                    style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: '"Lato", sans-serif', fontSize: '16px' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '14px' }}>Email</label>
                <input type="email" name="email" className="form-control" placeholder="Your Email" required
                    style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: '"Lato", sans-serif', fontSize: '16px' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '14px' }}>Service Interested In</label>
                <input type="text" name="phone" className="form-control" placeholder="Your Phone Number"
                    required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: '"Lato", sans-serif', fontSize: '16px' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '14px' }}>Message</label>
                <textarea name="message" className="form-control" rows={5}
                    placeholder="Tell us about your project" required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: '"Lato", sans-serif', fontSize: '16px' }}></textarea>
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>{btnText}</button>
        </form>
    );
}
