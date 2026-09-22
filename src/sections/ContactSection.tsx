import { motion } from 'framer-motion';
import { useState, type ChangeEvent, type FormEvent } from 'react';
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

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch('https://formspree.io/f/xwpbardz', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) throw new Error('Request failed');

      setFormState(initialForm);
      setStatus('success');
      setFeedback('Thank you! Your message has been sent.');
    } catch {
      setStatus('error');
      setFeedback('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center bg-transparent py-20 pb-40">
      <div className="mx-auto w-full max-w-5xl bg-transparent py-24 pb-40">
        
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something together"
          description="Share your idea, timeline, or requirements. I usually respond quickly through WhatsApp, LinkedIn, or email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start mt-12">
          
          {/* Left Card: Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10">
                <FiMessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">Fast response</p>
                <h3 className="font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1">WhatsApp, LinkedIn, or email</h3>
              </div>
            </div>

            <p className="font-['Inter'] text-sm leading-relaxed text-gray-400 drop-shadow-lg mb-8">
              If you have a product idea, a freelance brief, or a collaboration in mind, the quickest route is WhatsApp. I also keep LinkedIn and email open for formal outreach.
            </p>

            <div className="mt-auto space-y-3 flex-grow">
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10"
              >
                <span className="font-['Inter'] text-sm font-medium text-white flex items-center gap-3"><FiZap className="h-4 w-4" /> WhatsApp Me</span>
                <span className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Direct</span>
              </a>

              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10"
              >
                <span className="font-['Inter'] text-sm font-medium text-white flex items-center gap-3"><FiUser className="h-4 w-4" /> LinkedIn Profile</span>
                <span className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Network</span>
              </a>

              <a
                href={`mailto:${contactLinks.email}`}
                className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10"
              >
                <span className="font-['Inter'] text-sm font-medium text-white flex items-center gap-3"><FiMail className="h-4 w-4" /> {contactLinks.email}</span>
                <span className="font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Card: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all w-full text-left p-6 md:p-8"
          >
            <input type="hidden" name="_subject" value="New message from Himansh Sharma portfolio" />

            <div className="flex items-center justify-start gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-gray-200 ring-1 ring-white/10">
                <FiSend className="h-5 w-5" />
              </div>
              <div>
                <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">Contact form</p>
                <h3 className="font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white drop-shadow-lg mt-1">Send project details</h3>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 w-full">
              <label className="flex flex-col space-y-2 w-full">
                <span className="font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </label>

              <label className="flex flex-col space-y-2 w-full">
                <span className="font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </label>
            </div>

            <label className="flex flex-col space-y-2 w-full mt-5 flex-grow">
              <span className="font-['Inter'] text-xs font-medium text-gray-400 uppercase tracking-wider">Message</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about the project, timeline, or idea."
                className="w-full h-full min-h-[140px] box-border rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-['Inter'] text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-['Inter'] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback && (
              <p className="font-['Inter'] mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400">
                {status === 'success' && <FiCheckCircle className="h-4 w-4 text-green-400" />}
                {feedback}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}