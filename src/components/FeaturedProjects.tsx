import { workExperience } from '@/data/resume';

const projects = [
  {
    title: 'Smart Voyager',
    category: 'Web Development',
    description: 'Advanced data-driven tool for maritime operations with dynamic update features and user engagement systems.',
    isNew: true,
  },
  {
    title: 'Smartship Platform',
    category: 'Full Stack',
    description: 'Comprehensive maritime platform with Auth0 SSO integration, user management, and Redis caching mechanisms.',
    isNew: false,
  },
  {
    title: 'Employee Management Application',
    category: 'Web Development',
    description: 'Complete employee management system built during internship with user-friendly interfaces.',
    isNew: false,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#252525] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors relative"
            >
              {project.isNew && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent-green text-white text-xs font-bold rounded-full">
                  NEW
                </span>
              )}
              <p className="text-accent-blue text-sm font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

