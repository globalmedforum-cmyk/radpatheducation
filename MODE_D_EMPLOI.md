# 📚 Mode d'emploi de RadPathEducation

Bienvenue sur votre plateforme ! Ce guide a été conçu pour que vous puissiez gérer 100% de votre contenu vous-même, directement depuis internet, sans aucun logiciel à installer.

---

## 🚀 Le principe : GitHub = Votre Tableau de Bord

Votre site est connecté à votre "coffre-fort" GitHub. Dès que vous modifiez un texte ou ajoutez une image sur GitHub, votre site web se met à jour automatiquement en moins d'une minute !

L'adresse de votre coffre-fort est : **https://github.com/globalmedforum-cmyk/radpatheducation**

---

## 1. Créer une nouvelle publication (Cas, Blog, Cours)

1. Allez sur votre page GitHub et ouvrez le dossier **`posts`**.
2. En haut à droite, cliquez sur **"Add file"** > **"Create new file"**.
3. Dans la case *Name your file*, donnez un nom à votre article, sans espaces, et terminez par `.mdx` (exemple : `nouveau-cas-pulmonaire.mdx`).
4. Dans la grande zone de texte, copiez-collez obligatoirement ce bloc "d'en-tête" tout en haut :

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

5. Une fois terminé, cliquez en haut à droite sur le bouton vert **"Commit changes..."** (C'est votre bouton Publier !).

**⚠️ Les règles d'Or de l'en-tête :**
- **category** : Écrivez `"cas"` pour un cas clinique, `"blog"` pour un article, ou `"cours"` pour un support.
- **views** : Les 3 articles avec le chiffre le plus élevé s'afficheront tout en haut de l'accueil.

---

## 2. Ajouter des images (Scanner / Histologie)

Pour afficher une image, il faut d'abord la "stocker" sur votre GitHub.

1. Sur votre page GitHub, allez dans le dossier **`public`** puis dans le dossier **`images`**.
2. Cliquez sur **"Add file"** > **"Upload files"**.
3. Glissez les images (ex: `radio-1.jpg`, `histo-1.jpg`) depuis votre ordinateur vers la page web.
4. Cliquez sur le bouton vert **"Commit changes"**.
5. *Maintenant que l'image est stockée, vous pouvez l'utiliser dans votre article !* Allez dans le dossier `posts`, modifiez votre article, et utilisez le raccourci suivant :

```mdx
<CompareImages 
  imgLeft="/images/radio-1.jpg" 
  captionLeft="Scanner (Coupe axiale)" 
  imgRight="/images/histo-1.jpg" 
  captionRight="Coloration H&E x40" 
/>
```

---

## 3. Modifier un article existant (Correction de fautes)

1. Allez dans le dossier **`posts`** sur GitHub.
2. Cliquez sur l'article que vous souhaitez modifier.
3. Cliquez sur l'icône en forme de **crayon** en haut à droite de l'article.
4. Faites vos modifications.
5. Cliquez sur le bouton vert **"Commit changes..."**.

---

## 4. Les Outils RadPathEducation (Raccourcis)

Plutôt que d'écrire du code complexe, utilisez ces raccourcis directement dans le texte de votre article :

### A. Ajouter une vidéo YouTube
Prenez l'ID à la fin du lien YouTube (ex: `dQw4w9WgXcQ`), puis écrivez :
```mdx
<Video id="dQw4w9WgXcQ" />
```

### B. Proposer un fichier à télécharger (PPTX, PDF)
Stocker le fichier dans le dossier `public/files/` sur GitHub (via *Upload files*), puis écrivez :
```mdx
<Download file="mon-cours.pptx" title="📥 Télécharger le support de cours" />
```

---

## 5. Personnaliser le design du site

### Changer le logo en haut à gauche
1. Téléversez votre image `logo.png` dans `public/images/` sur GitHub.
2. Ouvrez le fichier `src/app/layout.tsx`. Cliquez sur le crayon pour éditer.
3. Ligne 34 : supprimez ou commentez la ligne `<span className="text-2xl...`.
4. Ligne 36 : décommentez la ligne `<Image src="/images/logo.png"...` (enlevez les `//`).
5. *Commit changes*.

### Changer les images de la page d'accueil (Le "Scanner vs Histologie" de l'en-tête)
1. Téléversez vos deux images dans `public/images/` et nommez-les `scanner-renal.jpg` et `histo-renale.jpg`.
2. Ouvrez le fichier `src/app/page.tsx`.
3. Cherchez la ligne `src="https://placehold.co/600x600/111827/475569?text=Scanner+Renal"` (vers la ligne 71) et remplacez par `src="/images/scanner-renal.jpg"`.
4. Faites la même chose pour l'histologie (vers la ligne 84), en remplaçant par `src="/images/histo-renale.jpg"`.

### Changer votre photo "À Propos"
1. Téléversez votre photo dans `public/images/ma-photo.jpg`.
2. Éditez `src/app/a-propos/page.tsx`.
3. Décommentez la ligne `<img src="/images/ma-photo.jpg"...` (enlevez les `//`) et modifiez le texte en dessous.

