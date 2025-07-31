import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TrustNova: Banking Application",
      description:
        "A Web Application using machine learning that predicts loan approvals with ensemble stacking, improving accuracy and reducing bias.",
      image:
        "https://arizent.brightspotcdn.com/09/40/c68fca7640a2bed61a7d1d3c9c87/mobile-app-art-2.jpeg",
      technologies: ["Python", "Streamlit", "PostgreSQL"],
      githubUrl: "https://github.com/potatant/TrustNova"
    },
    {
      title: "JeoJi: Desktop Assistant",
      description:
        "AI-powered desktop assistant using CNN and MFCC for voice commands and task management with real-time updates and drag-drop UI.",
      image:
        "https://miro.medium.com/v2/resize:fit:1280/0*0FwligBlXRpjTi__.jpg",
      technologies: ["Python", "XML", "TensorFlow", "MongoDB"],
      githubUrl: "https://github.com/potatant/AI-Deskstop-Assistant"
    },
    {
      title: "Fashion Recommendation System",
      description:
        "An e-commerce recommendation web app using CNN-based feature extraction for product suggestions with a clean UI.",
      image:
        "https://systenics.ai/_astro/recc_system_1.DGKouOWu_Z1wyrgG.jpg",
      technologies: ["Python", "MongoDB", "Streamlit", "Web Scraping"],
      githubUrl: "https://github.com/potatant/Fashion-Recc" 
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio to showcase projects and skills using modern web stack and optimized performance design.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "" // no link
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a52a3c] to-[#800020]">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a52a3c] to-[#800020] mx-auto mb-4"></div>
           
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button (Only if available) */}
                  {project.githubUrl && project.githubUrl.trim() !== "" && (
                    <div className="flex space-x-4 text-sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-[#800020] hover:text-[#a52a3c] font-medium transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
