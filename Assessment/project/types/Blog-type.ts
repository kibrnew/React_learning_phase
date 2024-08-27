 import { Author } from "./author-type";
 export interface BlogType {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: Author | null;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
  }