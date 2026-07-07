import React from 'react';

export function Video({ id }: { id: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9 my-8 w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[400px]"
      ></iframe>
    </div>
  );
}

export function Download({ file, title = "Télécharger le fichier" }: { file: string, title?: string }) {
  return (
    <div className="my-8">
      <a 
        href={`/files/${file}`} 
        download 
        className="not-prose inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition no-underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {title}
      </a>
    </div>
  );
}

export function CompareImages({ 
  imgLeft, 
  imgRight, 
  captionLeft = "Radiologie", 
  captionRight = "Histologie" 
}: { 
  imgLeft: string, 
  imgRight: string, 
  captionLeft?: string, 
  captionRight?: string 
}) {
  return (
    <div className="my-10 p-4 bg-slate-50 border border-slate-200 rounded-xl not-prose">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Gauche (Radio) */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-black rounded-lg overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgLeft} alt={captionLeft} className="max-w-full max-h-[400px] object-contain" />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-700 text-center">{captionLeft}</p>
        </div>
        
        {/* Image Droite (Histo) */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center min-h-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgRight} alt={captionRight} className="max-w-full max-h-[400px] object-contain" />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-700 text-center">{captionRight}</p>
        </div>
      </div>
    </div>
  );
}