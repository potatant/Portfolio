
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "adhanure@buffalo.edu",
      link: "mailto:adhanure@buffalo.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1(716)-292-8088",
      link: "tel:+17162928088"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Buffalo, NY",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a52a3c] to-[#800020]">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a52a3c] to-[#800020] mx-auto mb-4"></div>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you're looking for a developer, have a question, or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-[#a52a3c] to-[#800020] text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
``
