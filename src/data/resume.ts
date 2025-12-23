export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface TechnicalSkill {
  category: string;
  technologies: string[];
}

export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  awards?: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
}

export interface Internship {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Achievement {
  title: string;
  category: string;
  year: string;
}

export interface AdditionalInfo {
  softSkills: string[];
  languages: string[];
}

export const personalInfo: PersonalInfo = {
  name: "ALWIN KUNJACHAN",
  location: "Alappuzha, Kerala",
  phone: "+91 9074332960",
  email: "alwinpkunjachan@gmail.com",
  linkedin: "Linkedin.com/in/alwin-kunjachan-82ba2b226/",
};

export const technicalSkills: TechnicalSkill[] = [
  {
    category: "Frontend",
    technologies: ["Angular", "HTML5", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    category: "Backend",
    technologies: ["NodeJS", "ExpressJS"],
  },
  {
    category: "Databases",
    technologies: ["Cassandra", "CQL", "MongoDB", "Redis"],
  },
  {
    category: "Programming Languages",
    technologies: ["JavaScript", "TypeScript", "Python"],
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "ZeroNorth (Formerly Alpha Ori Technologies)",
    location: "Chennai, India",
    position: "Software Engineer L1",
    startDate: "Nov 2023",
    endDate: "Present",
    achievements: [
      "Contributed to the development and deployment of advanced data-driven tools such as Smart Voyager and Smartship",
      "Designed and implemented a dynamic update popup feature for Smart voyager, showcasing newly released functionalities using both text and visual content to improve user engagement and onboarding experience",
      "Configured the popup to appear only once per user on their first login post-release, with an automatic expiry after 1 week, ensuring timely yet non-intrusive communication of product updates",
      "Created and optimized CQL queries for importing object records and modifying data",
      "Integrated Auth0-based Single Sign-On (SSO) alongside existing login mechanisms, improving authentication flexibility, security, and user experience across Smartship",
      "Designed and implemented a flexible user and role management system within Smartship",
      "Developed schedulers and caching mechanisms using redis for functional requirements",
      "Delivered scalable and efficient technical solutions, ensuring optimal performance",
    ],
    awards: [
      "Received the People's Recognition Award at ZeroNorth for significant contribution to the Auth0 implementation and consolidation in the Smartship project, presented by the Managing Director",
      "Recognized as a Star Performer at ZeroNorth for outstanding performance and impactful contributions to the Smartship product during the Jan–Jun 2025 review period",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Mar Athanasius College of Engineering",
    location: "Kothamangalam, Kerala",
    degree: "Bachelor of Technology - Mechanical Engineering",
    startDate: "Aug 2019",
    endDate: "June 2023",
    grade: "CGPA: 9.14/10",
  },
  {
    institution: "K E Carmel Central School",
    location: "Muhamma, Alappuzha",
    degree: "CBSE - XII (Bio Science)",
    startDate: "June 2018",
    endDate: "May 2019",
    grade: "Percentage: 94.6%",
  },
  {
    institution: "K E Carmel Central School",
    location: "Muhamma, Alappuzha",
    degree: "CBSE - X",
    startDate: "June 2016",
    endDate: "May 2017",
    grade: "CGPA: 10/10",
  },
];

export const internship: Internship = {
  company: "ZeroNorth (Formerly Alpha Ori Technologies)",
  location: "Chennai, India",
  position: "Software Engineer Intern",
  startDate: "April 2023",
  endDate: "Nov 2023",
  description: [
    "Completed software development assignments (Employee Management Application)",
    "Gained knowledge of ship-related information and the technology stacks used within the company",
    "Gained hands-on experience in building user-friendly interfaces for maritime web applications",
  ],
};

export const achievements: Achievement[] = [
  {
    title: "School Topper",
    category: "CBSE Class X 2017",
    year: "2017",
  },
  {
    title: "School Topper",
    category: "CBSE Class XII - BioMaths 2019",
    year: "2019",
  },
  {
    title: "District Topper",
    category: "CBSE Class XII Mathematics 2019",
    year: "2019",
  },
  {
    title: "Scholarship",
    category: "DG's Merit Award for Academics 2019",
    year: "2019",
  },
  {
    title: "Scholarship",
    category: "Prime Minister Scholarship Scheme 2019, 2020, 2021, 2022",
    year: "2019-2022",
  },
];

export const additionalInfo: AdditionalInfo = {
  softSkills: ["Collaboration", "Communication", "Creativity"],
  languages: ["English", "Malayalam", "Hindi", "Tamil"],
};

