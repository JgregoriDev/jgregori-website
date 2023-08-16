export interface modelsProject {
    id: number;
    name: string;
    description: string;
    link: string;
    technologies: string[];
    photos: {
        url: string;
        description: string;
    };
    github: string;
    url: string;
}