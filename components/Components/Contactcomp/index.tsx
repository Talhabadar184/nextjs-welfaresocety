import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { trpc } from '@/lib/trpc-client';

const Contactcomp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    },
    onError: (error) => {
      setStatus('error');
      setErrorMessage(error.message);
      setTimeout(() => setStatus('idle'), 5000);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    submitMutation.mutate(formData);
  };

  const contacts = [
    {
      title: 'Chair',
      name: 'Muhammad Zafar ul Haq',
      phone: '+92 324 1557130',
      email: 'chair@ieeecsucp.org'
    },
    {
      title: 'Vice Chair',
      name: 'Ali Usman Khan Durani',
      phone: '+92 321 5353105',
      email: 'v.chair@ieeecsucp.org'
    },
    {
      title: 'General Secretary',
      name: 'Abdul Moiez Majid Khan',
      phone: '+92 304 4869577',
      email: 'gen.sec@ieeecsucp.org'
    },
  ];

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-[#FFA016] mb-8 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                Get in <span className="text-[#FFA016]">Touch</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed italic border-l-2 border-[#FFA016]/20 pl-8 mb-12">
                "Have a question or want to collaborate? Reach out to us and let's build something extraordinary together."
              </p>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl group hover:border-[#FFA016]/30 transition-all duration-500"
                  >
                    <h3 className="text-[#FFA016] text-[10px] font-black uppercase tracking-[0.2em] mb-2">{contact.title}</h3>
                    <p className="text-white text-xl font-bold mb-4">{contact.name}</p>
                    <div className="flex flex-col gap-3">
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                        <FaPhoneAlt className="text-[#FFA016] text-xs" />
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                        <FaEnvelope className="text-[#FFA016] text-xs" />
                        {contact.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-[#FFA016]/20 to-transparent rounded-[2rem]"
            >
              <div className="bg-zinc-900/80 backdrop-blur-3xl p-8 md:p-12 rounded-[1.8rem] border border-white/5">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                    <input
                      required
                      type="text"
                      placeholder="Collaboration Inquiry"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#FFA016]/50 transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    className={`w-full group relative overflow-hidden flex items-center justify-center gap-3 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-500 ${status === 'loading' ? 'bg-gray-800 cursor-not-allowed' : 'bg-[#FFA016] text-black hover:shadow-[0_0_30px_rgba(255,160,22,0.3)] hover:-translate-y-1 active:scale-95'
                      }`}
                  >
                    <AnimatePresence mode="wait">
                      {status === 'loading' ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          Send Message
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Submission Status Messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-sm"
                      >
                        <FaCheckCircle />
                        Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm"
                      >
                        <FaExclamationCircle />
                        {errorMessage || 'Failed to send message. Please try again.'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcomp;
