import { getSortedPostsData, getTopVisitedPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const topPosts = getTopVisitedPosts(3);

  // Petit composant pour afficher une carte de publication
  const PostCard = ({ post, highlight = false }: { post: any, highlight?: boolean }) => (
    <Link href={`/posts/${post.id}`} className="block group h-full">
      <article className={`bg-white h-full p-6 rounded-xl shadow-sm border ${highlight ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200'} hover:shadow-md hover:border-blue-400 transition flex flex-col`}>
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${post.category === 'blog' ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {post.category === 'blog' ? 'Blog' : 'Cas Clinique'}
            </span>
            {highlight && <span className="text-xs text-orange-500 font-bold flex items-center gap-1">🔥 Populaire</span>}
          </div>
          <h3 className="text-xl font-bold text-[#0b1c2c] group-hover:text-blue-600 transition mb-2">
            {post.title}
          </h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {post.description}
          </p>
        </div>
        <div className="text-xs font-semibold text-slate-400 mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <span>Publié le {post.date}</span>
          <span className="text-blue-500 group-hover:translate-x-1 transition-transform">Lire &rarr;</span>
        </div>
      </article>
    </Link>
  );

  return (
    <div className="w-full space-y-12 mt-4">
      
      {/* NOUVELLE EN-TÊTE MODERNE */}
      <section className="bg-[#0b1c2c] rounded-2xl overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          
          {/* Côté Gauche : Texte & Slogan */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#0b1c2c] to-[#122b40]">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              L'imagerie au-delà des ombres.
            </h1>
            <div className="border-l-4 border-blue-500 pl-6 mb-6">
              <p className="text-xl md:text-2xl text-blue-100 font-medium italic">
                "Nous faisons de l'anatomopathologie mais avec un autre type de microscope."
              </p>
            </div>
            <p className="text-slate-300 text-lg">
              Explorez notre base de données confrontant l'imagerie médicale à l'analyse anatomo-pathologique pour une médecine de précision.
            </p>
          </div>

          {/* Côté Droit : Comparaison Visuelle (Scanner vs Histo) */}
          <div className="lg:w-1/2 flex relative bg-slate-900 min-h-[300px]">
            
            {/* Image Scanner */}
            <div className="w-1/2 relative border-r border-slate-700">
              {/* REMPLACEZ cette image grise par votre image de Radiopaedia */}
              {/* Enregistrez l'image sous public/images/scanner-renal.jpg */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://placehold.co/600x600/111827/475569?text=Scanner+Renal" 
                alt="Scanner Carcinome Rénal" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500" 
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Radiologie (TDM)
              </div>
            </div>

            {/* Image Histologie */}
            <div className="w-1/2 relative">
              {/* REMPLACEZ cette image grise par votre image de Pathology Outlines */}
              {/* Enregistrez l'image sous public/images/histo-renale.jpg */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://placehold.co/600x600/f8fafc/334155?text=Histologie+H%26E" 
                alt="Histologie Carcinome Rénal" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500" 
              />
              <div className="absolute bottom-4 right-4 bg-white/90 text-[#0b1c2c] px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Histologie (H&E)
              </div>
            </div>

            {/* Badge Central optionnel */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-[#0b1c2c] z-10">
              VS
            </div>

          </div>
        </div>
      </section>

      {/* Publications les plus visitées */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b border-slate-300 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">Publications Populaires</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPosts.map((post) => (
            <PostCard key={post.id} post={post} highlight={true} />
          ))}
        </div>
      </section>

      {/* Toutes les publications récentes */}
      <section>
        <div className="flex justify-between items-center mb-6 border-b border-slate-300 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">Derniers Ajouts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </div>
  );
}