export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  logo: string;
  tags: string[];
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  logo: string;
  tags: string[];
}

export interface ProjectForm {
  title: string;
  description: string;
  link: string;
  logo: string;
  selectedTags: string[];
}
