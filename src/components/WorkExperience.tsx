import { workExperience } from '@/data/resume';

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-300 mb-1">
                    {exp.position}
                  </p>
                  <p className="text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow-custom">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-white mt-1">●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {exp.awards && exp.awards.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Awards & Recognition:
                  </h4>
                  <ul className="space-y-2">
                    {exp.awards.map((award, awardIndex) => (
                      <li
                        key={awardIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-white mt-1">🏆</span>
                        <span className="font-medium">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

