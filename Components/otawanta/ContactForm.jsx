import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { ASSETS, FALLBACK_ASSETS } from '../../src/assets.js';

// Simple UI components to replace the missing ones
const Button = ({ children, className = '', disabled = false, ...props }) => (
  <button 
    className={`px-6 py-3 bg-white hover:bg-gray-200 disabled:bg-gray-600 text-black rounded-lg transition-colors ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input 
    className={`w-full px-4 py-3 bg-black border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
    {...props}
  />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea 
    className={`w-full px-4 py-3 bg-black border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none ${className}`}
    {...props}
  />
);

export default function ContactForm({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setActiveSection('contact');
    }
  }, [isInView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const FORMSPREE_URL = 'https://formspree.io/f/mvgeovbd';
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 px-6 relative"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url(${ASSETS.gallery[3]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-white" />
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em]">
              CONTACT
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg tracking-wider">
            Bookings & Inquiries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-[#00f0ff] mx-auto mb-6" />
              <h3 className="text-2xl font-light tracking-wider mb-4">Message Sent!</h3>
              <p className="text-gray-400 tracking-wider">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-[#0a0a0a] border-gray-800 text-white placeholder:text-gray-600 focus:border-[#00f0ff] h-14 text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-[#0a0a0a] border-gray-800 text-white placeholder:text-gray-600 focus:border-[#00f0ff] h-14 text-lg"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-[#0a0a0a] border-gray-800 text-white placeholder:text-gray-600 focus:border-[#00f0ff] h-14 text-lg"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-[#0a0a0a] border-gray-800 text-white placeholder:text-gray-600 focus:border-[#00f0ff] text-lg resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00f0ff] hover:bg-[#00d9e6] text-black font-light tracking-[0.2em] h-14 text-lg rounded-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <span>SENDING...</span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    SEND MESSAGE
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}