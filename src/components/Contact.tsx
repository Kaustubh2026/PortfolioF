import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            content="mkaustubh2026@gmail.com"
            href="mailto:mkaustubh2026@gmail.com"
          />
          <ContactCard
            icon={<Phone size={24} />}
            title="Phone"
            content="+91 7972903306"
            href="tel:+91 7972903306"
          />
          <ContactCard
            icon={<MapPin size={24} />}
            title="Location"
            content="Pune ,India"
          />
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  content,
  href
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateZ: -5 }}
    whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      rotateZ: 5,
      transition: { duration: 0.3 }
    }}
    className="tech-card p-8 text-center"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      className="inline-block p-3 bg-[rgba(0,255,255,0.1)] rounded-full mb-4"
    >
      <span className="text-cyan-400">{icon}</span>
    </motion.div>
    <h3 className="text-lg font-semibold mb-2 text-cyan-300">{title}</h3>
    {href ? (
      <a
        href={href}
        className="text-gray-300 hover:text-cyan-400 transition-colors"
      >
        {content}
      </a>
    ) : (
      <p className="text-gray-300">{content}</p>
    )}
  </motion.div>
);

export default Contact;