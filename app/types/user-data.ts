interface Skill {
  title: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
}

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
}

interface Certification {
  title: string;
  year: string;
}

export interface UserData {
  name: string;
  age: number;
  phone: string;
  email: string;
  address: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
