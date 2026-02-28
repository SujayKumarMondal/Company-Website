'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { COMPANY_INFO } from '@/utils/constants';
import { Button } from '@/components/Button';
import { containerVariants, itemVariants } from '@/utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactSectionProps {
  dark?: boolean;
}

export const ContactSection = ({ dark = false }: ContactSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulated submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="We'd love to hear from you. Let's discuss how we can help your business grow."
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>

          <div className="space-y-6">
            {/* Email */}
            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <Mail size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.email}</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <Phone size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.phone}</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <MapPin size={20} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.address}</p>
              </div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div className="mt-8" variants={itemVariants}>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-gray-50 rounded-lg p-8 border border-gray-200"
          variants={itemVariants}
        >
          <motion.div className="space-y-4">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none`}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Check size={20} />
                <p>Thank you! We'll be in touch soon.</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Google Map */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="Phoenix Infosystems Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4468339166806!2d77.62415752346967!3d12.971648587341382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17cf1234abcd%3A0x1234567890abcdef!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
