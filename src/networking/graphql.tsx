export interface Gists {
  totalCount: number;
  nodes?: Gist[];
}

export interface Gist {
  id: string;
  description: string;
  url: string;
  files?: FilesEntity[];
  comments: Comments;
  forks: Forks;
}

export interface FilesEntity {
  name: string;
  language: Language;
}

export interface Language {
  name: string;
}

export interface Comments {
  totalCount: number;
}

export interface Forks {
  nodes?: {
    url: string;
    owner: {
      login: string;
      avatarUrl: string;
    };
  }[];
}
