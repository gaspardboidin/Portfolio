export interface Project {
  id: string;
  title: string;
  description: string;
  link: string | null;
  logo: string;
  tags: string[];
  comingSoon?: boolean;
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  logo: string;
  tags: string[];
  inProgress?: boolean;
}

export interface ProjectForm {
  title: string;
  description: string;
  link: string;
  logo: string;
  selectedTags: string[];
}
