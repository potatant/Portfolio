//import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      skills: [
        { name: "SQL", level: 70 },
        { name: "R", level: 65 },
        { name: "Power BI", level: 70 },
        { name: "Visualization", level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 70 },
        { name: "Feature Engineering", level: 65 },
        { name: "TenserFlow", level: 75 },
        { name: "StreamLit", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 70 },
        { name: "Jupyter", level: 80 },
        { name: "AWS", level: 65 },
        { name: "VS code", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a52a3c] to-[#800020]">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a52a3c] to-[#800020] mx-auto mb-4"></div>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#800020] mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#5a3d3d] font-medium">{skill.name}</span>
                        <span className="text-sm font-semibold text-[#a52a3c]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#eadcd5] rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#a52a3c] to-[#800020] h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "2+", label: "Papers Published" },
              { number: "5+", label: "Projects Completed" },
              { number: "20+", label: "Books Read" },
              { number: "100+", label: "Cups of Coffee" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a52a3c] to-[#800020] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#6b4c4c] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
