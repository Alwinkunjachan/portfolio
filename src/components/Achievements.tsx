import { achievements } from '@/data/resume';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">
          Scholastic Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 shadow-custom-lg hover:shadow-custom transition-all border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏅</span>
                <h3 className="text-xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-2">
                {achievement.category}
              </p>
              <p className="text-sm text-gray-400 font-medium">
                {achievement.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

