import { additionalInfo } from '@/data/resume';

export default function AdditionalInfo() {
  return (
    <section id="additional" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Additional Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>💼</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black text-gray-300 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors shadow-custom"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>🌐</span>
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black text-gray-300 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors shadow-custom"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

