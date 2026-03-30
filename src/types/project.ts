export interface Project{
    slug: string;
    title: string;
    role: string;
    status: string;
    impact?: string;
    description?: string;
    year: number;
    imageUrl?: string | null;
    featuredImages?: string[];
    projectUrl?: string;
    tags: string[];
}