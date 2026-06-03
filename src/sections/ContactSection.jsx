import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheckCircle, FiMail, FiMessageCircle, FiSend, FiUser, FiZap } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { contactLinks } from '../data/profile';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactSection() {
  const [formState, setFormState] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch('https://formspree.io/f/xwpbardz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormState(initialForm);
      setStatus('success');
      setFeedback('Thank you! Your message has been sent.');
    } catch {
      setStatus('error');
      setFeedback('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-shell relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Share your idea, timeline, or requirements. I usually respond quickly through WhatsApp, LinkedIn, or email."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                <FiMessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300/85">Fast response</p>
                <h3 className="text-xl font-bold text-white">WhatsApp, LinkedIn, or email</h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-300">
              If you have a product idea, a freelance brief, or a collaboration in mind, the quickest route is
              WhatsApp. I also keep LinkedIn and email open for formal outreach.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/15"
              >
                <span className="inline-flex items-center gap-3"><FiZap className="h-4 w-4" /> WhatsApp Me</span>
                <span className="text-xs uppercase tracking-[0.24em]">Direct</span>
              </a>

              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:border-violet-400/25 hover:bg-violet-500/10"
              >
                <span className="inline-flex items-center gap-3"><FiUser className="h-4 w-4" /> LinkedIn Profile</span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Network</span>
              </a>

              <a
                href={`mailto:${contactLinks.email}`}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:border-violet-400/25 hover:bg-violet-500/10"
              >
                <span className="inline-flex items-center gap-3"><FiMail className="h-4 w-4" /> {contactLinks.email}</span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value="New message from Himansh Sharma portfolio" />

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                <FiSend className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300/85">Contact form</p>
                <h3 className="text-xl font-bold text-white">Send project details</h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="input-focus w-full rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="input-focus w-full rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-sm font-medium text-slate-300">Message</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about the project, timeline, or idea."
                className="input-focus w-full rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback ? (
              <p className={`mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-400/10 text-emerald-200' : 'bg-rose-400/10 text-rose-200'}`}>
                {status === 'success' ? <FiCheckCircle className="h-4 w-4" /> : null}
                {feedback}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}