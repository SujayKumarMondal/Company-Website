'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/utils/constants';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: SERVICES.slice(0, 4).map((service) => ({
        label: service.title,
        href: '#services',
      })),
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-20 border-b border-slate-800">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Transforming businesses through innovative technology solutions and
              strategic partnerships.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm hover:text-orange-500 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-sm hover:text-orange-500 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                {COMPANY_INFO.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                {COMPANY_INFO.address}
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-orange-500 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
