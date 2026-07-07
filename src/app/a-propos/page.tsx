export default function APropos() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 mt-4">
      <header className="border-b border-slate-300 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">À Propos de RadPathEducation</h1>
      </header>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Emplacement pour la photo */}
        <div className="w-48 h-48 shrink-0 rounded-full border-4 border-slate-100 overflow-hidden bg-slate-200 flex items-center justify-center relative">
          {/* Pour ajouter votre photo, mettez une image nommée "ma-photo.jpg" dans public/images/ et décommentez la ligne ci-dessous */}
          {/* <img src="/images/ma-photo.jpg" alt="Portrait" className="w-full h-full object-cover" /> */}
          <span className="text-slate-400 text-sm text-center px-4">Emplacement Photo</span>
        </div>

        {/* Description */}
        <div className="flex-1 prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-700 font-medium">
            Ce projet est né d’une réflexion sur l’impact conjoint des progrès de la médecine et de la technologie sur les différentes spécialités médicales.
          </p>
          <p>
            Parmi elles, la radiologie occupe une place particulière, car elle représente sans doute l’exemple le plus abouti de la convergence entre ces deux domaines.
          </p>
          <p>
            <em>[Vous pourrez ajouter la suite de votre description ici en modifiant le fichier `src/app/a-propos/page.tsx`]</em>
          </p>
        </div>

      </div>
    </div>
  );
}