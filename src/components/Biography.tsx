import { personalInfo, additionalInfo } from '@/data/resume';

export default function Biography() {
  return (
    <section id="biography" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar placeholder - you can add an actual image later */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Biography</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on{' '}
              <span className="text-accent-blue font-semibold">Angular</span>,{' '}
              <span className="text-accent-blue font-semibold">Node.js</span> and{' '}
              <span className="text-accent-blue font-semibold">Full Stack Development</span>.
            </p>
          </div>
        </div>
        
        {/* Let's Connect Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
          <div className="flex gap-4">
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5 fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              aria-label="Phone"
            >
              <svg className="w-5 h-5 fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

