import React from 'react';
import { PieChart, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <PieChart className="w-8 h-8 text-[#800020]" />,
      title: "Data-Driven Insights",
      description: "I transform raw data into meaningful insights that support smarter business decisions."
    },
  


    {
      icon: <Lightbulb className="w-8 h-8 text-[#800020]" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding creative solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-[#800020]" />,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills."
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#800020]" />,
      title: "Continuous Learner",
      description: "Always staying updated with the latest technologies and trends."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-[#800020]">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a52a3c] to-[#800020] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm Antariksha, a dedicated Masters student in Computer Science, with a strong interest in AI, machine learning, and data-driven technologies.
                 I’m passionate about building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                 My journey into tech began during my undergraduate years, where I explored projects in machine learning, recommendation systems, and blockchain-based applications. Since then, I’ve continued to deepen my skills through academic research, internships, and personal projects that combine both analytical thinking and creative design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee while planning my next project.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#fdf6f0] to-[#a52a3c] rounded-2xl flex items-center justify-center">
                
                <img
                  src="/public/profile1.png"  // Replace with your actual path
              alt="My Photo"
                  className="h-full object-contain rounded-2xl"
                  />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#a52a3c] to-[#800020] rounded-full opacity-80"></div>
               <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#fdf6f0] to-[#e5d0c5] rounded-full opacity-80"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;