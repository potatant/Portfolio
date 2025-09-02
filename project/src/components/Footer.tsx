//import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/potatant",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "www.linkedin.com/in/antariksha-dhanuree",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/potatant?s=11",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:adhanure@buffalo.edu",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Antariksha Dhanure</h3>
              <p className="text-gray-400 leading-relaxed">
                Python Developer passionate about creating innovative, 
                functional, and user-centered experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>adhanure@buffalo.edu</p>
                <p>+1 7162928088 </p>
                <p>Buffalo , NY</p>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>© {currentYear} Antariksha Dhanure. All rights reserved.</span>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110 transform"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <button
          onClick={scrollToTop}
className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-[#a52a3c] to-[#800020] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
aria-label="Back to top"

            //onClick={scrollToTop}
            //className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
            //aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
