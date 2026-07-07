"use client";

import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<{name: string, date: string, text: string}[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;
    
    // Ajout du commentaire localement (Simulation avant connexion à une vraie base de données)
    const newComment = {
      name,
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      text
    };
    
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setText("");
    setSubmitted(true);
    
    // Faire disparaître le message de succès après 3 secondes
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-16 pt-10 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-slate-800 mb-8">Commentaires & Discussions</h3>
      
      {/* Liste des commentaires */}
      <div className="space-y-6 mb-10">
        {comments.length === 0 ? (
          <p className="text-slate-500 italic">Aucun commentaire pour le moment. Soyez le premier à partager votre avis !</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[#0b1c2c]">{comment.name}</span>
                <span className="text-xs text-slate-400">{comment.date}</span>
              </div>
              <p className="text-slate-700">{comment.text}</p>
            </div>
          ))
        )}
      </div>

      {/* Formulaire */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="text-lg font-bold text-slate-800 mb-4">Laisser un commentaire</h4>
        {submitted && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium">
            Votre commentaire a été publié avec succès !
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom ou Pseudo *</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Dr. Dupont"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (ne sera pas publié)</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="votre@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">Votre commentaire *</label>
            <textarea 
              id="comment" 
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              placeholder="Partagez votre avis sur ce cas ou cette publication..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="px-6 py-3 bg-[#0b1c2c] text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition focus:ring-4 focus:ring-blue-200"
          >
            Publier le commentaire
          </button>
        </form>
      </div>
    </div>
  );
}