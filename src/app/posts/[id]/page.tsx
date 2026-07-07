import { getPostData } from '@/lib/posts';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Video, Download, CompareImages } from '@/components/mdx';
import Comments from '@/components/Comments';

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.id);

  return (
    <article className="max-w-4xl mx-auto mt-4 bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-200">
      
      {/* Navigation Rapide */}
      <nav className="mb-8 text-sm font-medium">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition flex items-center gap-1">
          <span>&larr;</span> Retour aux cas
        </Link>
      </nav>

      {/* Header du Cas */}
      <header className="space-y-4 border-b border-slate-200 pb-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2c] leading-tight">
          {postData.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
          <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Publié le {postData.date}
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
            {postData.category || 'Article'}
          </span>
        </div>
      </header>

      {/* Content with MDX */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-[#0b1c2c] prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl">
        <MDXRemote 
          source={postData.content || ''} 
          components={{ Video, Download, CompareImages }} 
        />
      </div>

      {/* Section Commentaires */}
      <Comments />
      
    </article>
  );
}