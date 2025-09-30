import React, { useState } from 'react';
import Footer from "./footer";


const FORM_ENDPOINT = 'https://formspree.io/f/mpwydlpl'; // replace with your Formspree ID

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null, error: null });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please type your message';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setStatus({ sending: true, success: null, error: null });

    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      setStatus({ sending: false });
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ sending: false, success: true, error: null });
        setForm({ name: '', email: '', subject: '', message: '', phone: '' });
      } else {
        const text = await res.text();
        setStatus({ sending: false, success: false, error: text || 'Server error' });
      }
    } catch (err) {
      setStatus({ sending: false, success: false, error: err.message || 'Network error' });
    }
  }

  return (
    <div>
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>Have a project, job offer or just want to say hi? Fill the form — I usually reply within 24–48 hours.</p>

          <div className="contact-info">
            <p><b>Email:</b> you@yourdomain.com</p>
            <p><b>Phone:</b> +91 98765 43210</p>
            <p><b>Location:</b> Your City, Country</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            <span>Phone (optional)</span>
            <input
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98xxxxxxx"
            />
          </label>

          <label>
            <span>Subject</span>
            <input
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              placeholder="Short summary"
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project, timeline and budget (if any)"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <div className="buttons">
            <button type="submit" className="send-btn" disabled={status.sending}>
              {status.sending ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={() => setForm({ name: '', email: '', subject: '', message: '', phone: '' })}
              className="reset-btn"
            >
              Reset
            </button>
          </div>

          {status.success && <p className="success-msg">Message sent successfully 🎉</p>}
          {status.error && <p className="error">Error sending message: {status.error}</p>}
        </form>
      </div>
    
    </div>
       <Footer/> 
    </div>
    
  );
}

export default Contact;
