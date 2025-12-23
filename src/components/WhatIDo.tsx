import { technicalSkills } from '@/data/resume';

const services = [
  {
    title: 'Web Development',
    description: 'Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable and efficient backend solutions using Node.js, Express, and various databases. Focus on performance and maintainability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Database Management',
    description: 'Expertise in designing and optimizing databases including Cassandra, MongoDB, and Redis for high-performance applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4">What I do</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          Build and maintain websites,{' '}
          <span className="text-accent-blue font-semibold">frontend dev</span> also have a mentorship called{' '}
          <span className="text-accent-blue font-semibold">MOFON</span>. My motto is Beauty and function in equal measure as priority.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#252525] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

