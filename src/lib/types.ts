export interface SocialNetwork {
  name: string;
  href: string;
  svg: string;
}

export interface Project {
  colorCard: string;
  title: string;
  description: string;
  href: string;
  technologies: string[];
  github: string;
  date: string;
  colors: [number, number, number][];
  borderColor: string;
}

export interface Experience {
  title: string;
  place: string;
  date: string;
  category: "education" | "work";
}
