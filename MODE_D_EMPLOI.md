# 📚 Mode d'emploi de RadPathEducation

Bienvenue sur votre plateforme ! Ce guide a été conçu pour que vous puissiez gérer 100% de votre contenu vous-même, de manière simple et sans risquer de "casser" le design.

---

## 1. Créer une nouvelle publication (Cas, Blog, Cours)

Tout votre contenu se trouve dans le dossier `posts/`. Pour ajouter une publication :

1. Créez un nouveau fichier dans le dossier `posts/`.
2. Nommez-le sans espace, avec des tirets, et terminez par `.mdx` (exemple : `tumeur-renale.mdx`).
3. Copiez-collez obligatoirement ce bloc "d'en-tête" tout en haut du fichier :

```mdx
---
title: "Votre grand titre"
date: "2026-07-10"
description: "Une courte phrase qui résume le contenu."
category: "cas" 
views: 10
---

Puis écrivez votre texte ici...
```

**⚠️ Les règles d'Or de l'en-tête :**
- **category** : Écrivez `"cas"` pour un cas clinique, `"blog"` pour un article, ou `"cours"` pour un support pédagogique. Le site le rangera automatiquement dans le bon onglet.
- **views** : C'est le "thermomètre" de popularité. Les 3 articles avec le chiffre le plus élevé s'afficheront tout en haut de l'accueil dans "Publications Populaires".

---

## 2. Formater votre texte

Écrivez naturellement. Si vous voulez mettre en forme :

- `# Titre de section` (Un `#` suivi d'un espace)
- `## Sous-titre` (Deux `##`)
- `**Ce texte sera en gras**`
- `*Ce texte sera en italique*`
- `- Pour faire une liste avec des puces`

---

## 3. Les Outils RadPathEducation (Raccourcis)

Plutôt que d'écrire du code complexe, utilisez ces raccourcis directement dans votre texte (Attention : respectez bien les majuscules/minuscules) :

### A. Comparer Scanner / Histologie
Placez vos images dans `public/images/`, puis écrivez :
```mdx
<CompareImages 
  imgLeft="/images/scanner.jpg" 
  captionLeft="TDM Thoracique (Coupe axiale)" 
  imgRight="/images/biopsie.jpg" 
  captionRight="Coloration H&E x40" 
/>
```

### B. Ajouter une vidéo YouTube
Prenez l'ID à la fin du lien YouTube (ex: `dQw4w9WgXcQ`), puis écrivez :
```mdx
<Video id="dQw4w9WgXcQ" />
```

### C. Proposer un fichier à télécharger (PPTX, PDF)
Placez votre fichier dans `public/files/`, puis écrivez :
```mdx
<Download file="mon-cours.pptx" title="📥 Télécharger le support de cours" />
```

---

## 4. Personnaliser le design du site

### Changer le logo en haut à gauche
1. Placez votre image `logo.png` dans `public/images/`.
2. Ouvrez le fichier `src/app/layout.tsx`.
3. Ligne 34 : supprimez ou commentez la ligne `<span className="text-2xl...`.
4. Ligne 36 : décommentez la ligne `<Image src="/images/logo.png"...` (enlevez les `//`).

### Changer les images de la page d'accueil (Le "Scanner vs Histologie" de l'en-tête)
1. Placez vos deux vraies images dans `public/images/` (nommez-les `scanner-renal.jpg` et `histo-renale.jpg`).
2. Ouvrez le fichier `src/app/page.tsx`.
3. Cherchez la ligne `src="https://placehold.co/600x600/111827/475569?text=Scanner+Renal"` (vers la ligne 71).
4. Remplacez-la par `src="/images/scanner-renal.jpg"`.
5. Faites la même chose pour l'image d'histologie (vers la ligne 84), en remplaçant par `src="/images/histo-renale.jpg"`.

### Changer votre photo "À Propos"
1. Placez votre photo dans `public/images/ma-photo.jpg`.
2. Ouvrez `src/app/a-propos/page.tsx`.
3. Décommentez la ligne `<img src="/images/ma-photo.jpg"...` (enlevez les `//`).
4. Modifiez le texte juste en dessous.

---

## 💡 Aide : Comment lancer le site sur mon ordinateur ?

1. Ouvrez l'application "Terminal".
2. Naviguez vers le dossier de votre site : `cd Desktop/Gemini/blog-clinique`
3. Tapez : `npm run dev`
4. Ouvrez votre navigateur internet sur `http://localhost:3000`
