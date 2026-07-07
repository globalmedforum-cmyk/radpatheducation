import { getPostsByCategory } from '@/lib/posts';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = getPostsByCategory('blog');

  return (
    <div className="w-full space-y-10 mt-4">
      <header className="border-b border-slate-300 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Le Blog</h1>
        <p className="text-slate-600 mt-2">Réflexions, actualités et textes ouverts.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(({ id, date, title, description }) => (
          <Link href={`/posts/${id}`} key={id} className="block group">
            <article className="bg-white h-full p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-purple-300 transition flex flex-col">
              <div className="flex-1">
                <span className="text-xs font-bold px-2 py-1 rounded uppercase tracking-wider bg-purple-100 text-purple-700 mb-3 inline-block">
                  Blog
                </span>
                <h3 className="text-xl font-bold text-[#0b1c2c] group-hover:text-purple-600 transition mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {description}
                </p>
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <span>Publié le {date}</span>
                <span className="text-purple-500 group-hover:translate-x-1 transition-transform">Lire l'article &rarr;</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}