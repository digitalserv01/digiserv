// SYSTÈME DE PROMPTS PAR JOUR DE LA SEMAINE

export const DAILY_BLOG_PROMPTS = {
  // LUNDI - CV & EMPLOI
  monday: {
    category: "cv-emploi",
    keywords: ["CV français", "recherche emploi France", "entretien embauche", "lettre motivation", "ATS", "Pôle Emploi"],
    subjects: [
      "CV qui passe l'ATS : Guide complet français 2024",
      "Entretien d'embauche : 10 questions pièges et réponses parfaites",
      "Lettre de motivation qui marque : Modèles français 2024",
      "Reconversion professionnelle : Stratégie complète française",
    ],
  },

  // MARDI - DÉVELOPPEMENT WEB
  tuesday: {
    category: "developpement-web",
    keywords: ["création site web", "développement France", "site internet professionnel", "CMS français", "hébergement France"],
    subjects: [
      "Site vitrine professionnel : Guide complet TPE françaises 2024",
      "E-commerce français : Shopify vs WooCommerce, le match",
      "Performance web : Optimiser son site pour Google France",
      "RGPD et développement web : Checklist légale complète",
    ],
  },

  // MERCREDI - MARKETING DIGITAL
  wednesday: {
    category: "marketing-digital",
    keywords: ["marketing digital France", "publicité Facebook", "Google Ads français", "SEO local", "réseaux sociaux France"],
    subjects: [
      "Google Ads rentable : Stratégie PME françaises (budget 500€/mois)",
      "Facebook Ads 2024 : Cibler les consommateurs français efficacement",
      "Email marketing RGPD : Automatisation légale et profitable",
      "SEO local France : Dominer Google dans votre ville",
    ],
  },

  // JEUDI - E-COMMERCE
  thursday: {
    category: "ecommerce",
    keywords: ["boutique en ligne France", "e-commerce français", "vente en ligne", "Shopify France", "dropshipping légal"],
    subjects: [
      "Boutique en ligne rentable : Business plan e-commerce français 2024",
      "Dropshipping légal France : Guide complet entrepreneur 2024",
      "Marketplace vs site propre : Quelle stratégie pour débuter ?",
      "Conversion e-commerce : Optimiser ses ventes en ligne France",
    ],
  },

  // VENDREDI - IA & AUTOMATION
  friday: {
    category: "ia-automation",
    keywords: ["intelligence artificielle France", "chatbot français", "automatisation PME", "IA business", "agents conversationnels"],
    subjects: [
      "Chatbot qui convertit : Guide complet PME françaises 2024",
      "Automatisation business : 10 tâches à déléguer à l'IA",
      "IA générative au service des entreprises françaises",
      "Agents conversationnels : Révolutionner le service client",
    ],
  },
};

export function getDailyTopic() {
    const now = new Date();
    // As "9 AM French time" is a requirement, we need to adjust for the timezone.
    // France is UTC+2 during summer (daylight saving) and UTC+1 during winter.
    // A robust solution would use a library like `date-fns-tz`, but for simplicity, we'll approximate.
    const frenchTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
    
    const dayOfWeek = frenchTime.getDay(); // Sunday - 0, Monday - 1, etc.
    const weekOfYear = Math.floor(frenchTime.getDate() / 7); // Simple week rotation

    let promptInfo;
    switch (dayOfWeek) {
        case 1: promptInfo = DAILY_BLOG_PROMPTS.monday; break;
        case 2: promptInfo = DAILY_BLOG_PROMPTS.tuesday; break;
        case 3: promptInfo = DAILY_BLOG_PROMPTS.wednesday; break;
        case 4: promptInfo = DAILY_BLOG_PROMPTS.thursday; break;
        case 5: promptInfo = DAILY_BLOG_PROMPTS.friday; break;
        default: return null; // No posts on weekends
    }

    const subject = promptInfo.subjects[weekOfYear % promptInfo.subjects.length];

    return {
        subject,
        keywords: promptInfo.keywords.join(', '),
        category: promptInfo.category,
    };
}