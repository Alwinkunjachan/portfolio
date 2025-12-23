import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechnicalSkills from '@/components/TechnicalSkills';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Internship from '@/components/Internship';
import Achievements from '@/components/Achievements';
import AdditionalInfo from '@/components/AdditionalInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TechnicalSkills />
      <WorkExperience />
      <Education />
      <Internship />
      <Achievements />
      <AdditionalInfo />
      <Footer />
    </main>
  );
}

