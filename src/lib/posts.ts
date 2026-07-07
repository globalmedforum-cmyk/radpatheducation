import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
  id: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  views?: number;
  content?: string;
};

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" or ".md" from file name to get id
    const id = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; description: string; category?: string; views?: number }),
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Fonction pour récupérer les posts les plus vus
export function getTopVisitedPosts(limit: number = 3): PostData[] {
  const allPosts = getSortedPostsData();
  return allPosts
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
}

// Fonction pour récupérer les posts d'une catégorie spécifique
export function getPostsByCategory(category: string): PostData[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.category === category);
}

export async function getPostData(id: string): Promise<PostData> {
  // Try finding .mdx first, then .md
  let fullPath = path.join(postsDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.md`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Return the raw content to be processed by next-mdx-remote
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; description: string; category?: string; views?: number }),
  };
}