"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Hamza Ahmed</h3>
            <p className="text-dark-300 leading-relaxed">
              Full-stack developer passionate about creating innovative digital experiences 
              that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Projects', href: '#projects' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/hamzaahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/hamzaahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/hamzaahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Twitter size={20} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hamza@example.com"
                className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-dark-400 text-sm">
            © {currentYear} Hamza Ahmed. All rights reserved.
          </p>
          <p className="text-dark-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500" /> using Next.js & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 