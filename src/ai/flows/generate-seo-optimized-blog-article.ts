
'use server';

import { DeepSeekAPI } from '@/services/deepseek';
import { GenerateSeoOptimizedBlogArticleInput, GenerateSeoOptimizedBlogArticleOutput } from '../schemas';

// Helper function to generate a URL-friendly slug
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

// Enhanced SEO-focused prompt for DeepSeek
function createSEOPrompt(input: GenerateSeoOptimizedBlogArticleInput): string {
  return `
MISSION : Créer un article de blog SEO-optimisé de 1000-1200 mots pour entrepreneurs français, qui surpasse la concurrence.

SUJET : ${input.subject}
MOTS-CLÉS : ${input.keywords}
CATÉGORIE : ${input.category}

STRUCTURE OBLIGATOIRE ET DÉTAILLÉE :

1. TITRE SEO (H1) :
- 60 caractères max.
- Inclure le mot-clé principal et l'année 2025.
- Doit être percutant et susciter la curiosité (ex: "Les 10 Questions Pièges en Entretien et les Réponses pour les Déjouer").

2. META DESCRIPTION :
- 155 caractères max.
- Inclure mots-clés, un bénéfice client clair et un appel à l'action implicite (ex: "Réussissez votre entretien en 2025 ! Découvrez les questions pièges et les réponses gagnantes pour décrocher le poste.").

3. CONTENU MARKDOWN (1000-1200 mots) :

**Introduction (environ 150 mots)** :
- Démarrer avec une statistique française récente et surprenante.
- Présenter un problème concret et relatable pour les entrepreneurs ou chercheurs d'emploi français.
- Annoncer clairement la solution que l'article va apporter.

**7 CONSEILS PRATIQUES (sections H2, 120-150 mots CHACUNE)** :
- Chaque conseil doit être un sous-titre H2.
- **Approfondir chaque point** : ne pas donner de conseil générique. Fournir des étapes concrètes, des exemples précis et des "mini-scripts" si applicable.
- Intégrer des chiffres et données sourcées (INSEE, Pôle Emploi, etc.) lorsque c'est pertinent.
- Varier les exemples pour toucher différents secteurs (artisanat, tech, conseil, etc.).
- Inclure des références aux spécificités françaises (ex: Code du Travail, RGPD, statuts d'entreprise).

**OUTILS RECOMMANDÉS (section H2, environ 150 mots)** :
- Comparer 3-4 outils pertinents pour le sujet.
- Indiquer des prix réalistes pour le marché français (ex: "Canva Pro à 12€/mois").
- Lister les avantages et inconvénients pour une PME ou un entrepreneur individuel.

**ÉTUDE DE CAS CONCRÈTE (section H2, environ 200 mots)** :
- Inventer une étude de cas réaliste d'une entreprise française (ex: "Une TPE de menuiserie à Bordeaux", "Une consultante RH à Lyon").
- **Présenter des résultats chiffrés et quantifiables (avant/après)**. Par exemple: "En optimisant son SEO local, l'entreprise a vu une augmentation de 40% des demandes de devis en 3 mois."

**Conclusion (environ 150 mots)** :
- Résumer les 3 points clés les plus importants de l'article.
- Terminer par un encouragement fort et une transition naturelle vers le Call-To-Action.

4. CALL-TO-ACTION :
- ctaText : Créer une offre spécifique et irrésistible avec un prix (ex: "Obtenez un audit SEO complet de votre site pour seulement 99€").
- ctaButton : Rédiger un texte de bouton qui pousse à l'action (ex: "Je veux mon audit", "Discuter de mon projet").

EXIGENCES TECHNIQUES ET STYLISTIQUES :
- Utiliser le vouvoiement ("vous").
- Ton professionnel, expert, mais très accessible et pédagogique.
- Intégrer les mots-clés de manière naturelle (densité entre 0.5% et 2%).
- **Inclure des éléments de tendance pour 2025** : télétravail, impact de l'IA, compétences numériques, etc.

IMPORTANT : Tu dois retourner UNIQUEMENT un objet JSON valide avec la structure exacte suivante. Ne retourne rien d'autre.
Vérifie que le JSON est valide et que l'article est complet (1000-1200 mots) et non tronqué avant de le retourner.
{
  "title": "Titre H1 optimisé SEO",
  "metaDescription": "Meta description 155 caractères max",
  "article": "Article complet en Markdown",
  "wordCount": "nombre_de_mots",
  "readingTime": "6 min",
  "ctaText": "Texte CTA spécifique avec prix",
  "ctaButton": "Texte bouton CTA",
  "keywords": ["mot-clé1", "mot-clé2", "mot-clé3"]
}
`;
}

export async function generateSeoOptimizedBlogArticle(input: GenerateSeoOptimizedBlogArticleInput): Promise<GenerateSeoOptimizedBlogArticleOutput> {
  console.log('Starting SEO blog generation with DeepSeek API...');
  
  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error('DEEPSEEK_API_KEY environment variable is not set.');
  }

  const deepseek = new DeepSeekAPI(process.env.DEEPSEEK_API_KEY);
  
  try {
    // Generate the article content using DeepSeek
    const prompt = createSEOPrompt(input);
    const generatedContent = await deepseek.generateSEOContent(prompt);
    
    // Validate required fields
    if (!generatedContent.title || !generatedContent.article) {
      throw new Error('Generated content missing required fields from DeepSeek API');
    }

    // Generate additional fields
    const slug = generateSlug(generatedContent.title);
    const imageUrl = `https://source.unsplash.com/random/1200x600?${encodeURIComponent(input.category.replace(/-/g, ' '))}`;
    
    // Calculate word count if not provided
    const wordCount = generatedContent.wordCount || 
      generatedContent.article.split(/\s+/).filter((word: string) => word.length > 0).length;
    
    // Calculate reading time if not provided
    const readingTime = generatedContent.readingTime || 
      `${Math.ceil(wordCount / 200)} min`;

    const result: GenerateSeoOptimizedBlogArticleOutput = {
      title: generatedContent.title,
      slug,
      metaDescription: generatedContent.metaDescription,
      article: generatedContent.article,
      wordCount,
      readingTime,
      ctaText: generatedContent.ctaText,
      ctaButton: generatedContent.ctaButton,
      keywords: generatedContent.keywords || [],
      category: input.category,
      imageUrl,
    };

    console.log(`Article "${result.title}" generated successfully with ${wordCount} words`);
    return result;

  } catch (error) {
    console.error('Error in generateSeoOptimizedBlogArticle:', error);
    throw new Error(`Failed to generate SEO article for subject "${input.subject}": ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
