import { technicalSkills } from '@/data/resume';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Technical Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-white pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-black text-gray-300 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors shadow-custom"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

