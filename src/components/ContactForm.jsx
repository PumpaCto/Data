"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Gelecekte burada backend entegrasyonu yapılacak
    alert("Thanks for contacting MiraVerse! We will reach out soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gold rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold transition-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gold rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold transition-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gold rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold transition-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="w-full py-4 px-8 bg-gold text-black font-bold rounded-full hover:shadow-lg transition-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
