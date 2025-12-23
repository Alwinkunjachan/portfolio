import { internship } from '@/data/resume';

export default function Internship() {
  return (
    <section id="internship" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Internship
        </h2>
        <div className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {internship.company}
              </h3>
              <p className="text-lg text-gray-300 mb-1">
                {internship.position}
              </p>
              <p className="text-gray-400">
                {internship.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow-custom">
                {internship.startDate} - {internship.endDate}
              </span>
            </div>
          </div>
          <div>
            <ul className="space-y-3">
              {internship.description.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-white mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

