import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Replace with your actual resume path
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#c9a8a6] rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#800020] rounded-full opacity-20 animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#c9a8a6] rounded-full opacity-20 animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#a0524d] rounded-full opacity-20 animate-float delay-300"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Initials */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#a52a3c] to-[#800020] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            AD
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Antariksha{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a52a3c] to-[#800020]">
              Dhanure
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 animate-fade-in delay-200">
            Aspiring Data Analyst and Machine Learning Engineer
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in delay-300">
            I craft intelligent, data-driven, and user-focused solutions using AI and machine learning. 
            Passionate about transforming complex problems into impactful, elegant systems that learn, adapt, and deliver value.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-400">
            <a
              href="https://github.com/potatant"
              className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-[#800020]" />
            </a>
            <a
              href="https://www.linkedin.com/in/antariksha-dhanuree/"
              className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-[#800020]" />
            </a>
           
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-gradient-to-r from-[#a52a3c] to-[#800020] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="px-8 py-4 bg-gradient-to-r from-[#800020] to-[#a52a3c] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
