
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
MISSION : Créer un article de blog SEO-optimisé de 1000-1200 mots pour entrepreneurs français.

SUJET : ${input.subject}
MOTS-CLÉS : ${input.keywords}
CATÉGORIE : ${input.category}

STRUCTURE OBLIGATOIRE :

1. TITRE SEO (H1) : 60 caractères max, inclure mot-clé principal, année 2025
2. META DESCRIPTION : 155 caractères max avec mots-clés et bénéfice client
3. CONTENU MARKDOWN :

**Introduction (150 mots)** :
- Statistique française récente et frappante
- Problème concret des entrepreneurs français
- Promesse de solution dans l'article

**7 CONSEILS PRATIQUES** (sections H2, 120-150 mots chacune) :
- Conseils actionnables avec exemples français
- Étapes concrètes à suivre
- Chiffres et données françaises quand possible

**OUTILS RECOMMANDÉS** (section H2, 150 mots) :
- Comparaison de 3-4 outils spécifiques
- Prix réalistes français (ex: hébergement 5€/mois)
- Avantages/inconvénients pour PME françaises

**ÉTUDE DE CAS** (section H2, 200 mots) :
- Entreprise française réelle ou réaliste
- Résultats quantifiés (avant/après)
- Secteur spécifique (boulangerie Lyon, menuiserie Bordeaux, etc.)

**Conclusion (150 mots)** :
- Résumé des points clés
- Encouragement et transition naturelle vers CTA

4. CALL-TO-ACTION :
- ctaText : Offre spécifique avec prix (ex: "Notre équipe développe des sites vitrines optimisés SEO à partir de 209€")
- ctaButton : Action directe ("Discuter sur WhatsApp", "Réserver un appel")

EXIGENCES TECHNIQUES :
- Utiliser "vous" (vouvoiement)
- Références légales françaises (RGPD, Code du Travail)
- Ton professionnel mais accessible
- Mots-clés intégrés naturellement
- Exemples secteurs variés français

IMPORTANT : Tu dois retourner UNIQUEMENT un objet JSON valide avec la structure exacte suivante. Ne retourne rien d'autre.
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

Vérifie que l'article est complet (1000-1200 mots) et non tronqué avant de retourner le JSON.`;
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
    throw new Error(`Failed to generate SEO article: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
