
// SYSTÈME DE PROMPTS PAR JOUR DE LA SEMAINE

export const DAILY_BLOG_PROMPTS = {
  // LUNDI - CV & EMPLOI
  monday: {
    category: "cv-emploi",
    keywords: ["CV français", "recherche emploi France", "entretien embauche", "lettre motivation", "ATS", "Pôle Emploi"],
    subjects: [
      "Comment créer un CV qui passe les filtres ATS en 2025",
      "Les 10 questions les plus fréquentes en entretien d'embauche et comment y répondre",
      "Le guide ultime pour une lettre de motivation percutante en France",
      "Réussir sa reconversion professionnelle en France : le plan d'action",
      "CV moderne 2025 : Les nouvelles tendances qui font la différence",
      "Négocier son salaire en France : Stratégies gagnantes pour 2025",
    ],
  },

  // MARDI - DÉVELOPPEMENT WEB
  tuesday: {
    category: "developpement-web",
    keywords: ["création site web", "développement France", "site internet professionnel", "CMS français", "hébergement France"],
    subjects: [
      "Le guide complet pour la création d'un site vitrine pour les TPE françaises en 2025",
      "Shopify vs WooCommerce : Quelle plateforme choisir pour le e-commerce en France ?",
      "Optimiser la performance de son site web pour les moteurs de recherche en France",
      "Checklist complète de conformité RGPD pour le développement web",
      "Next.js vs React : Quel framework choisir pour votre projet web en 2025",
      "WordPress vs Webflow : Comparatif complet pour créer son site professionnel",
    ],
  },

  // MERCREDI - MARKETING DIGITAL
  wednesday: {
    category: "marketing-digital",
    keywords: ["marketing digital France", "publicité Facebook", "Google Ads français", "SEO local", "réseaux sociaux France"],
    subjects: [
      "Comment créer une campagne Google Ads rentable pour les PME françaises avec un budget de 500€/mois",
      "Stratégies de ciblage efficaces sur Facebook Ads pour le marché français en 2025",
      "Le guide de l'email marketing RGPD : automatisation légale et profitable",
      "Comment dominer le SEO local sur Google dans votre ville en France",
      "TikTok pour entreprises : Comment réussir sur la plateforme en France en 2025",
      "Marketing d'influence français : Trouver et collaborer avec les bons créateurs",
    ],
  },

  // JEUDI - E-COMMERCE
  thursday: {
    category: "ecommerce",
    keywords: ["boutique en ligne France", "e-commerce français", "vente en ligne", "Shopify France", "dropshipping légal"],
    subjects: [
      "Comment créer un business plan pour une boutique en ligne rentable en France en 2025",
      "Le guide complet du dropshipping légal pour les entrepreneurs français en 2025",
      "Marketplace vs. site propre : Quelle est la meilleure stratégie pour débuter dans l'e-commerce ?",
      "Comment optimiser le taux de conversion de votre site e-commerce en France",
      "Amazon FBA France : Guide complet pour débuter la vente sur Amazon",
      "Cross-border e-commerce : Vendre à l'international depuis la France",
    ],
  },

  // VENDREDI - IA & AUTOMATION
  friday: {
    category: "ia-automation",
    keywords: ["intelligence artificielle France", "chatbot français", "automatisation PME", "IA business", "agents conversationnels"],
    subjects: [
      "Le guide complet pour créer un chatbot qui convertit pour les PME françaises en 2025",
      "10 tâches que vous pouvez automatiser avec l'IA pour votre PME",
      "Comment l'IA générative peut bénéficier aux entreprises françaises",
      "Comment les agents conversationnels révolutionnent le service client",
      "Automatiser sa comptabilité avec l'IA : Outils et stratégies pour les PME",
      "IA et création de contenu : Booster sa productité marketing en 2025",
    ],
  },
};

export function getDailyTopics(): Array<{ subject: string; keywords: string; category: string }> {
    const now = new Date();
    // Create a new date object for Paris timezone
    const parisDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" }));
    const dayOfWeek = parisDate.getDay(); // Sunday - 0, Monday - 1, etc.

    let promptInfo;
    switch (dayOfWeek) {
        case 0: // Sunday -> use Monday
        case 1: 
            promptInfo = DAILY_BLOG_PROMPTS.monday; 
            break;
        case 2: 
            promptInfo = DAILY_BLOG_PROMPTS.tuesday; 
            break;
        case 3: 
            promptInfo = DAILY_BLOG_PROMPTS.wednesday; 
            break;
        case 4: 
            promptInfo = DAILY_BLOG_PROMPTS.thursday; 
            break;
        case 5: 
            promptInfo = DAILY_BLOG_PROMPTS.friday; 
            break;
        case 6: // Saturday -> use Monday
             promptInfo = DAILY_BLOG_PROMPTS.monday; 
            break;
        default:
            // Should not happen, but as a fallback, use Monday
             promptInfo = DAILY_BLOG_PROMPTS.monday; 
    }
    
    // Return all subjects for the day
    return promptInfo.subjects.map(subject => ({
        subject,
        keywords: promptInfo.keywords.join(', '),
        category: promptInfo.category,
    }));
}
