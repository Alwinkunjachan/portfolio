import { personalInfo } from '@/data/resume';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">{personalInfo.name}</p>
            <p className="text-gray-400 text-sm">{personalInfo.location}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {personalInfo.phone}
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Alwin Kunjachan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

