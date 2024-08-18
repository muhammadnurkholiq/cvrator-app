// userData.ts

export interface Certification {
  certification: string;
  date: string;
  issued_by: string;
}

export interface ContactInformation {
  address: string;
  email: string;
  phone: string;
}

export interface Education {
  achievements: string[];
  degree: string;
  duration: string;
  institution: string;
}

export interface Experience {
  company: string;
  duration: string;
  job_title: string;
  responsibilities: string[];
}

export interface Skill {
  proficiency: string;
  skill: string;
}

export interface UserData {
  name: string;
  contact_information: ContactInformation;
  summary: string;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
}
