'use client';

import { useState } from 'react';

const sanitizeInput = (value: string) => value.replace(/[<>]/g, '').trim();

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const subject = sanitizeInput(formData.subject);
    const message = sanitizeInput(formData.message);

    if (!name || !email || !subject || !message) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Input */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Stanley"
          className="w-full rounded-lg border border-cyan-400/20 bg-[#0D1326]/50 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50 focus:bg-[#0D1326]/70 focus:ring-1 focus:ring-cyan-400/20"
        />
        </div>

        {/* Email Input */}
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="stanley@example.com"
          className="w-full rounded-lg border border-cyan-400/20 bg-[#0D1326]/50 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50 focus:bg-[#0D1326]/70 focus:ring-1 focus:ring-cyan-400/20"
        />
        </div>
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className="w-full rounded-lg border border-cyan-400/20 bg-[#0D1326]/50 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50 focus:bg-[#0D1326]/70 focus:ring-1 focus:ring-cyan-400/20"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full rounded-lg border border-cyan-400/20 bg-[#0D1326]/50 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50 focus:bg-[#0D1326]/70 focus:ring-1 focus:ring-cyan-400/20 resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Success Message */}
      {submitted && (
        <div className="rounded-lg border border-green-400/30 bg-green-400/10 p-3 text-sm text-green-300">
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-center text-xs text-white/50">
        I'll respond to your message as soon as possible.
      </p>
    </form>
  );
}
