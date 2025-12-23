import { education } from '@/data/resume';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-gray-300 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-gray-400 mb-2">
                    {edu.location}
                  </p>
                  <p className="text-white font-semibold">
                    {edu.grade}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium whitespace-nowrap shadow-custom">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

