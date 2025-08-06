
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const faqData = {
 "general": [
   {
     "question": "Qu'est-ce qu'AmadiDigiConseils et quels sont vos domaines d'expertise ?",
     "answer": "AmadiDigiConseils est une agence digitale spécialisée dans l'accompagnement des entrepreneurs, TPE et PME françaises. Nous proposons la création de sites web, le marketing digital, la rédaction de CV professionnels, l'e-commerce et l'intégration d'intelligence artificielle pour optimiser votre présence en ligne."
   },
   {
     "question": "Quel type d'entreprises accompagnez-vous principalement ?",
     "answer": "Nous accompagnons les entrepreneurs individuels, TPE et PME de tous secteurs d'activité en France. Que vous soyez artisan, commerçant, consultant ou start-up, nous adaptons nos solutions digitales à vos besoins spécifiques et votre budget."
   },
   {
     "question": "Pourquoi faire appel à une agence digitale française plutôt qu'internationale ?",
     "answer": "Travailler avec une agence française vous garantit une parfaite connaissance du marché local, la conformité RGPD, un support en français et des solutions adaptées aux spécificités des entreprises françaises. Nous comprenons vos enjeux business et réglementaires."
   },
   {
     "question": "Quels sont vos principaux avantages concurrentiels ?",
     "answer": "Nos atouts : des tarifs transparents et compétitifs (sites vitrine dès 209€), une expertise technique complète, un accompagnement personnalisé, la livraison dans les délais, et un support client réactif en français. Nous privilégions la qualité et la satisfaction client."
   },
   {
     "question": "Travaillez-vous avec des clients partout en France ?",
     "answer": "Oui, nous travaillons avec des clients dans toute la France grâce à nos outils de collaboration à distance. Nous organisons des visioconférences pour les réunions projet et assurons un suivi personnalisé quel que soit votre emplacement géographique."
   },
   {
     "question": "Depuis combien de temps exercez-vous dans le digital ?",
     "answer": "Notre équipe cumule plusieurs années d'expérience dans le développement web, le marketing digital et l'automatisation IA. Nous restons constamment à jour sur les dernières tendances technologiques pour offrir des solutions modernes et performantes."
   },
   {
     "question": "Quelles sont vos valeurs et votre approche client ?",
     "answer": "Nous prônons la transparence, l'écoute client, la qualité technique et l'accompagnement personnalisé. Chaque projet fait l'objet d'un suivi individualisé, et nous nous engageons à livrer des solutions qui génèrent un retour sur investissement concret pour votre entreprise."
   },
   {
     "question": "Proposez-vous des solutions sur-mesure ou standardisées ?",
     "answer": "Nous proposons un mix optimal : des solutions éprouvées et abordables pour les besoins classiques, et des développements sur-mesure quand votre projet le nécessite. Cette approche nous permet d'optimiser les coûts tout en répondant précisément à vos besoins."
   }
 ],
 "process": [
   {
     "question": "Comment se déroule le premier contact et l'étude de votre projet ?",
     "answer": "Tout commence par une consultation gratuite via WhatsApp ou téléphone où nous analysons vos besoins, objectifs et budget. Nous vous proposons ensuite un devis détaillé sous 48h avec le scope exact du projet et les délais de livraison."
   },
   {
     "question": "Quels sont vos délais de livraison moyens ?",
     "answer": "Les délais varient selon le projet : CV professionnel en 24-48h, site vitrine en 5-10 jours ouvrés, boutique e-commerce en 2-3 semaines, campagne marketing en 3-5 jours. Nous respectons scrupuleusement les délais annoncés dans notre devis."
   },
   {
     "question": "Comment fonctionnent vos modalités de paiement ?",
     "answer": "Nous demandons généralement 50% d'acompte au lancement du projet et le solde à la livraison. Pour les petits projets (CV, audit), le paiement peut se faire intégralement au démarrage. Nous acceptons les virements bancaires et PayPal."
   },
   {
     "question": "Que se passe-t-il si je ne suis pas satisfait du résultat final ?",
     "answer": "Nous incluons des révisions dans tous nos projets et nous nous engageons à ajuster le livrable jusqu'à votre satisfaction complète. Si malgré nos efforts le résultat ne vous convient pas, nous proposons un remboursement partiel selon les conditions définies."
   },
   {
     "question": "Gardez-vous un droit sur les créations que vous réalisez pour moi ?",
     "answer": "Non, vous êtes propriétaire à 100% de tous les éléments créés pour votre projet : code source, design, contenus, accès administrateur. Nous vous fournissons tous les identifiants et fichiers sources à la fin du projet."
   },
   {
     "question": "Proposez-vous un suivi et de la maintenance après livraison ?",
     "answer": "Oui, nous offrons 30 jours de support gratuit post-livraison pour les corrections mineures. Au-delà, nous proposons des contrats de maintenance mensuels ou interventions ponctuelles selon vos besoins d'évolution et de support technique."
   },
   {
     "question": "Comment communiquons-nous pendant le projet ?",
     "answer": "Nous privilégions WhatsApp pour la communication rapide et les points d'étapes réguliers. Pour les réunions projet importantes, nous organisons des visioconférences. Vous recevez également des rapports d'avancement par email avec captures d'écran."
   },
   {
     "question": "Puis-je modifier ou annuler ma commande après validation ?",
     "answer": "Les modifications mineures sont possibles en cours de projet sans surcoût. Pour les modifications importantes changeant le scope, nous établissons un avenant au devis. L'annulation est possible mais l'acompte versé reste acquis si le travail a déjà commencé."
   },
   {
     "question": "Fournissez-vous une formation pour utiliser les outils créés ?",
     "answer": "Absolument ! Nous incluons une session de formation personnalisée pour vous apprendre à utiliser votre site web, tableau de bord e-commerce, outils marketing ou automatisations IA. Nous fournissons aussi une documentation détaillée."
   },
   {
     "question": "Que comprend exactement le devis que vous me proposez ?",
     "answer": "Nos devis détaillent précisément chaque prestation : conception, développement, design, intégrations, tests, formations, support inclus. Aucun coût caché - le prix annoncé est le prix final, hors éventuelles options supplémentaires que vous pourriez demander."
   }
 ],
 "website_services": [
   {
     "question": "Quelle est la différence entre un site vitrine et un site e-commerce ?",
     "answer": "Un site vitrine présente votre activité, services et coordonnées pour générer des contacts. Un site e-commerce permet en plus de vendre directement en ligne avec paiement sécurisé, gestion stocks et commandes. Nous créons les deux types selon vos besoins."
   },
   {
     "question": "Combien coûte la création d'un site vitrine professionnel ?",
     "answer": "Nos sites vitrine démarrent à 209€ pour une solution complète : design responsive, pages essentielles, formulaire contact, optimisation SEO de base et mise en ligne. Le prix varie selon le nombre de pages et fonctionnalités spécifiques souhaitées."
   },
   {
     "question": "Utilisez-vous WordPress ou développez-vous des sites sur-mesure ?",
     "answer": "Nous maîtrisons plusieurs technologies : WordPress pour sa flexibilité, développement sur-mesure avec Next.js pour les projets complexes, et Webflow pour un design avancé. Nous choisissons la solution la plus adaptée à vos besoins et budget."
   },
   {
     "question": "Mes sites sont-ils optimisés pour les mobiles et tablettes ?",
     "answer": "Tous nos sites sont développés en responsive design, garantissant un affichage parfait sur smartphones, tablettes et ordinateurs. Nous testons sur différents appareils et navigateurs pour assurer une expérience utilisateur optimale partout."
   },
   {
     "question": "Intégrez-vous le référencement naturel (SEO) dans vos créations ?",
     "answer": "Oui, l'optimisation SEO de base est incluse : structure HTML sémantique, balises title/meta optimisées, images optimisées, sitemap XML et intégration Google Analytics. Pour un référencement avancé, nous proposons des prestations SEO complémentaires."
   },
   {
     "question": "Puis-je modifier mon site web moi-même après livraison ?",
     "answer": "Absolument ! Nous développons vos sites avec des CMS intuitifs (WordPress, Webflow) et vous formons à leur utilisation. Vous pourrez facilement modifier textes, images, ajouter des pages et gérer votre contenu en autonomie."
   },
   {
     "question": "Fournissez-vous l'hébergement et le nom de domaine ?",
     "answer": "Nous vous aidons à choisir et configurer votre hébergement (recommandation : hébergeurs français comme OVH) et nom de domaine. Ces frais sont séparés de notre prestation (hébergement ~5€/mois, domaine ~12€/an) pour que vous gardiez la propriété complète."
   },
   {
     "question": "Combien de pages sont incluses dans un site vitrine standard ?",
     "answer": "Notre forfait site vitrine standard inclut 5-7 pages essentielles : Accueil, À propos, Services/Produits, Réalisations/Portfolio, Contact, Mentions légales. Pages supplémentaires possibles selon vos besoins avec supplément modéré."
   },
   {
     "question": "Créez-vous des sites multilingues ?",
     "answer": "Oui, nous développons des sites multilingues pour cibler différents marchés. Nous intégrons les modules de traduction appropriés et optimisons le SEO pour chaque langue. Supplément selon le nombre de langues et pages à traduire."
   },
   {
     "question": "Vos sites respectent-ils les normes RGPD ?",
     "answer": "Tous nos sites sont conçus conformément au RGPD : bannières cookies, politique de confidentialité, formulaires sécurisés, hébergement français. Nous vous accompagnons pour assurer la conformité légale complète de votre présence en ligne."
   },
   {
     "question": "Proposez-vous l'intégration de systèmes de réservation en ligne ?",
     "answer": "Oui, nous intégrons des solutions de réservation pour restaurants, salons de beauté, consultants, etc. Nous utilisons des outils comme Calendly, Booksy ou développons une solution sur-mesure avec synchronisation agenda et notifications automatiques."
   },
   {
     "question": "Pouvez-vous reprendre et améliorer un site existant ?",
     "answer": "Certainement ! Nous réalisons des refontes complètes ou partielles : modernisation du design, optimisation mobile, amélioration SEO, ajout de fonctionnalités. Nous analysons l'existant et proposons les améliorations les plus rentables pour votre activité."
   },
   {
     "question": "Intégrez-vous des outils d'analyse et de tracking ?",
     "answer": "Oui, nous configurons Google Analytics, Google Tag Manager, pixels Facebook/LinkedIn selon vos besoins marketing. Ces outils vous permettent de mesurer le trafic, conversions et ROI de votre site web pour optimiser vos performances."
   },
   {
     "question": "Créez-vous des sites avec espace membre ou connexion client ?",
     "answer": "Nous développons des espaces membres sécurisés avec authentification, profils utilisateurs, contenus privés et gestion des accès. Idéal pour les formations en ligne, services clients, portails partenaires ou communautés professionnelles."
   }
 ],
 "marketing_services": [
   {
     "question": "Que comprend votre service de marketing digital complet ?",
     "answer": "Notre service marketing digital inclut : audit SEO gratuit, stratégie de contenu, optimisation Google My Business, campagnes Google Ads, gestion réseaux sociaux, email marketing et reporting mensuel détaillé. Formules dès 105€/mois selon vos objectifs."
   },
   {
     "question": "Comment fonctionne votre service de référencement naturel (SEO) ?",
     "answer": "Nous démarrons par un audit SEO complet, puis optimisons votre site (technique, contenu, netlinking), créons du contenu optimisé et développons votre autorité. Résultats visibles sous 3-6 mois avec reporting mensuel des positions et trafic."
   },
   {
     "question": "Gérez-vous les campagnes Google Ads pour les TPE/PME ?",
     "answer": "Oui, nous créons et pilotez vos campagnes Google Ads : recherche de mots-clés, création annonces, optimisation enchères, suivi conversions. Setup à 140€ + gestion mensuelle. Budget pub minimum recommandé : 300€/mois pour des résultats significatifs."
   },
   {
     "question": "Proposez-vous la gestion des réseaux sociaux professionnels ?",
     "answer": "Nous gérons Facebook, Instagram, LinkedIn selon votre secteur : création contenu, publication programmée, engagement communauté, publicités ciblées. Forfaits de 105€ à 210€/mois selon le nombre de réseaux et fréquence de publication."
   },
   {
     "question": "Comment mesurez-vous le retour sur investissement (ROI) de vos actions marketing ?",
     "answer": "Nous trackons les KPIs essentiels : trafic web, génération de leads, conversions, chiffre d'affaires attribué, coût d'acquisition client. Reporting mensuel détaillé avec recommandations d'optimisation pour maximiser votre ROI marketing."
   },
   {
     "question": "Rédigez-vous du contenu pour mon site et mes réseaux sociaux ?",
     "answer": "Oui, nos rédacteurs spécialisés créent du contenu optimisé SEO : articles de blog, pages web, posts réseaux sociaux, newsletters. Nous respectons votre tone of voice et intégrons naturellement vos mots-clés stratégiques."
   },
   {
     "question": "Optimisez-vous les fiches Google My Business ?",
     "answer": "L'optimisation Google My Business est incluse dans nos services SEO local : informations complètes, photos professionnelles, gestion avis clients, posts réguliers, optimisation pour les recherches locales. Essentiel pour les commerces de proximité."
   },
   {
     "question": "Créez-vous des campagnes emailing respectueuses du RGPD ?",
     "answer": "Nous concevons des campagnes email marketing conformes RGPD : collecte de consentement, segmentation listes, templates responsive, automatisation séquences, désabonnement facile. Outils professionnels comme Mailchimp ou Sendinblue."
   },
   {
     "question": "Quel budget marketing mensuel conseillez-vous pour une TPE ?",
     "answer": "Pour une TPE, nous recommandons 200-500€/mois selon les objectifs : 105-210€ pour la gestion + 100-300€ de budget publicitaire. Nous adaptons la stratégie à votre budget et privilégions les actions les plus rentables pour votre secteur."
   },
   {
     "question": "Proposez-vous de la formation marketing pour gérer en interne ?",
     "answer": "Oui, nous proposons des formations marketing digital personnalisées : SEO, Google Ads, réseaux sociaux, email marketing. Format présentiel ou visio, documentation fournie. Idéal pour les entrepreneurs souhaitant développer leurs compétences internes."
   },
   {
     "question": "Comment gérez-vous les avis clients et l'e-réputation ?",
     "answer": "Nous surveillons votre e-réputation sur Google, réseaux sociaux et sites d'avis. Stratégie proactive : sollicitation avis positifs, réponses professionnelles aux commentaires négatifs, amélioration continue de votre image en ligne."
   },
   {
     "question": "Réalisez-vous des audits concurrentiels et de marché ?",
     "answer": "Nos audits analysent vos concurrents directs : positionnement SEO, stratégies publicitaires, présence réseaux sociaux, pricing. Ces insights nous permettent d'identifier les opportunités et de définir une stratégie marketing différenciante pour votre entreprise."
   }
 ],
 "career_services": [
   {
     "question": "En quoi consiste votre service de rédaction de CV professionnel ?",
     "answer": "Nous créons des CV optimisés ATS, modernes et personnalisés selon votre secteur d'activité. Service complet : réécriture, mise en page professionnelle, optimisation mots-clés, adaptation au marché français. Livraison sous 24-48h pour seulement 17€."
   },
   {
     "question": "Vos CV passent-ils les filtres ATS des entreprises françaises ?",
     "answer": "Oui, nos CV sont spécifiquement optimisés pour les logiciels ATS utilisés en France (notamment ceux de Pôle Emploi). Structure claire, mots-clés sectoriels, format compatible, pas d'éléments graphiques bloquants. Taux de passage ATS supérieur à 90%."
   },
   {
     "question": "Rédigez-vous aussi les lettres de motivation ?",
     "answer": "Absolument ! Nous rédigeons des lettres de motivation percutantes et personnalisées pour chaque candidature à seulement 10€. Adaptation au poste visé, mise en valeur de vos atouts, respect des codes français, accroche impactante."
   },
   {
     "question": "Optimisez-vous les profils LinkedIn pour la recherche d'emploi ?",
     "answer": "Nous optimisons votre profil LinkedIn complet : titre accrocheur, résumé convaincant, expériences valorisées, mots-clés sectoriels, recommandations. Service à 24€ incluant conseils stratégie réseau et recherche active d'opportunités."
   },
   {
     "question": "Proposez-vous un accompagnement pour la recherche d'emploi ?",
     "answer": "Oui, notre accompagnement inclut : stratégie de recherche personnalisée, identification d'opportunités, préparation entretiens, négociation salariale, suivi candidatures. Formule complète ou modules spécifiques selon vos besoins."
   },
   {
     "question": "Adaptez-vous les CV selon le secteur d'activité ?",
     "answer": "Chaque CV est personnalisé selon votre secteur : vocabulaire technique approprié, compétences valorisées, format adapté (créatif pour communication, sobre pour finance), références sectorielles. Notre expertise couvre tous les domaines professionnels."
   },
   {
     "question": "Combien de révisions incluez-vous dans vos prestations CV ?",
     "answer": "Nous incluons 2 révisions complètes dans nos tarifs CV et lettre de motivation. Au-delà, révisions supplémentaires à 5€. Notre objectif : votre satisfaction totale avec un document parfaitement adapté à vos candidatures."
   },
   {
     "question": "Aidez-vous à la reconversion professionnelle ?",
     "answer": "Nous accompagnons les reconversions : réécriture CV axée sur compétences transférables, valorisation formations, lettres de motivation spécialisées, stratégie LinkedIn, conseils sectoriels. Approche personnalisée pour maximiser vos chances de réussite."
   },
   {
     "question": "Créez-vous des CV pour les profils seniors ou débutants ?",
     "answer": "Nous adaptons notre approche à tous profils : jeunes diplômés (valorisation stages, projets), profils seniors (focus expertise, éviter âgisme), reconversions, cadres dirigeants. Chaque situation nécessite une stratégie de valorisation spécifique."
   },
   {
     "question": "Proposez-vous des simulations d'entretien d'embauche ?",
     "answer": "Nous organisons des simulations d'entretien par visioconférence : questions classiques et spécifiques, feedback constructif, conseils presentation, préparation questions candidat. Prestation à 35€ pour maximiser vos chances de réussite."
   },
   {
     "question": "Comment procédez-vous pour rédiger un CV personnalisé ?",
     "answer": "Processus en 3 étapes : questionnaire détaillé sur votre parcours et objectifs, rédaction première version sous 24h, échanges pour ajustements et finalisation. Communication via WhatsApp pour un service rapide et personnalisé."
   }
 ],
 "automation_ai_services": [
   {
     "question": "Qu'est-ce que l'intelligence artificielle peut apporter à mon entreprise ?",
     "answer": "L'IA peut automatiser vos tâches répétitives, améliorer votre service client avec des chatbots, optimiser votre marketing avec la personnalisation, et analyser vos données pour de meilleures décisions business. ROI mesurable dès les premiers mois."
   },
   {
     "question": "Créez-vous des chatbots personnalisés pour les entreprises françaises ?",
     "answer": "Nous développons des chatbots intelligents adaptés à votre activité : prise de RDV, SAV, génération de leads, FAQ automatisées. Integration WhatsApp, site web, Facebook Messenger. Chatbot simple dès 105€, solution avancée jusqu'à 419€."
   },
   {
     "question": "Comment l'automatisation peut-elle réduire mes coûts opérationnels ?",
     "answer": "L'automatisation élimine les tâches manuelles chronophages : envoi emails, gestion réseaux sociaux, suivi clients, facturation, reporting. Économies : 5-15h/semaine de travail manuel, réduction erreurs, amélioration satisfaction client."
   },
   {
     "question": "Proposez-vous des agents IA pour le service client ?",
     "answer": "Nos agents conversationnels gèrent 80% des demandes clients standards : informations produits, statuts commandes, FAQ, prise de RDV. Escalade vers humain si nécessaire. Disponible 24/7, réduction temps de réponse, satisfaction client améliorée."
   },
   {
     "question": "Intégrez-vous l'IA dans les systèmes de gestion existants ?",
     "answer": "Nous connectons l'IA à vos outils actuels : CRM, logiciels de gestion, e-commerce, comptabilité. API natives ou développement connecteurs sur-mesure. L'IA enrichit vos processus sans tout changer, transition en douceur."
   },
   {
     "question": "L'IA peut-elle m'aider à optimiser mes campagnes marketing ?",
     "answer": "L'IA analyse vos données clients pour optimiser ciblage publicitaire, personnaliser contenus, prédire comportements d'achat, automatiser email sequences. Amélioration taux de conversion de 20-40% et réduction coût acquisition client."
   },
   {
     "question": "Quelles tâches puis-je automatiser en priorité dans mon entreprise ?",
     "answer": "Priorités selon secteur : réponses emails/messages, publication réseaux sociaux, relances clients, génération devis, reporting, gestion agenda, suivi stocks. Audit gratuit pour identifier les automatisations les plus rentables."
   },
   {
     "question": "Formez-vous mes équipes à utiliser les outils IA que vous implémentez ?",
     "answer": "Formation complète incluse : session initiale, documentation détaillée, support 30 jours post-livraison. Nous formons vos équipes à utiliser, maintenir et optimiser les solutions IA pour maximiser leur adoption et efficacité."
   },
   {
     "question": "L'intelligence artificielle est-elle sécurisée pour les données de mon entreprise ?",
     "answer": "Sécurité maximale : chiffrement données, conformité RGPD, hébergement français quand possible, accès restreints, audits sécurité réguliers. Vos données restent confidentielles et sous votre contrôle total."
   },
   {
     "question": "Quel retour sur investissement puis-je attendre de l'automatisation IA ?",
     "answer": "ROI moyen : 200-400% la première année. Économies : réduction temps de traitement (30-70%), diminution erreurs (80%), amélioration satisfaction client (25%), augmentation ventes (15-30%). Calcul ROI personnalisé fourni."
   },
   {
     "question": "Développez-vous des solutions IA sur-mesure ou utilisez-vous des outils existants ?",
     "answer": "Approche mixte optimale : outils éprouvés (ChatGPT, Zapier, Make) pour besoins standards, développements sur-mesure pour spécificités métier. Cette stratégie optimise coûts et délais tout en répondant précisément à vos besoins."
   }
 ],
 "technical_support": [
   {
     "question": "Que comprend votre service de maintenance de site web ?",
     "answer": "Maintenance complète : mises à jour sécurité, sauvegardes automatiques, monitoring uptime, optimisations performances, corrections bugs, support technique réactif. Formules de 25€ à 75€/mois selon complexité du site."
   },
   {
     "question": "Comment gérez-vous la sécurité des sites web que vous créez ?",
     "answer": "Sécurité multicouche : certificats SSL, pare-feu, mises à jour logicielles automatiques, mots de passe forts, authentification double facteur, sauvegardes quotidiennes, monitoring activités suspectes. Protection maximale contre cyberattaques."
   },
   {
     "question": "Proposez-vous l'hébergement web pour les sites que vous créez ?",
     "answer": "Nous recommandons et configurons l'hébergement chez des partenaires français fiables (OVH, Hostinger). Vous restez propriétaire de votre hébergement. Configuration, migration et optimisation serveur incluses dans nos prestations."
   },
   {
     "question": "Comment procédez-vous en cas de problème technique urgent ?",
     "answer": "Support d'urgence sous 2-4h en jours ouvrés, 24h maximum weekend. Interventions prioritaires : site inaccessible, problèmes sécurité, dysfonctionnements majeurs. Clients maintenance bénéficient d'un support prioritaire et illimité."
   },
   {
     "question": "Réalisez-vous des sauvegardes régulières des données ?",
     "answer": "Sauvegardes automatiques quotidiennes : fichiers, bases de données, configurations. Stockage sécurisé multi-sites, rétention 30 jours minimum. Tests de restauration mensuels. Procédures de récupération rapide en cas d'incident."
   },
   {
     "question": "Aidez-vous au transfert de nom de domaine et migration de site ?",
     "answer": "Service de migration complet : transfert domaines, déménagement hébergement, préservation SEO, tests fonctionnels, redirection URLs. Migration sans interruption de service, accompagnement administratif inclus."
   },
   {
     "question": "Surveillez-vous les performances et la disponibilité des sites ?",
     "answer": "Monitoring 24/7 : temps de réponse, disponibilité, erreurs serveur, performances Core Web Vitals. Alertes automatiques en cas de problème, intervention proactive, rapports mensuels détaillés avec recommandations d'optimisation."
   },
   {
     "question": "Comment gérez-vous les mises à jour de contenu après livraison ?",
     "answer": "Formation complète pour gérer votre contenu en autonomie. Pour les clients préférant déléguer : service de mise à jour de contenu à 35€/h, forfaits mensuels disponibles. Réactivité garantie sous 48h."
   },
   {
     "question": "Proposez-vous des certificats SSL et la configuration HTTPS ?",
     "answer": "Certificats SSL inclus systématiquement : installation, configuration, redirection automatique HTTP vers HTTPS, optimisation sécurité. Renouvellement automatique, aucune intervention requise de votre part."
   },
   {
     "question": "Que se passe-t-il si mon site est piraté ou infecté ?",
     "answer": "Intervention d'urgence sous 4h : analyse intrusion, nettoyage malwares, renforcement sécurité, restauration si nécessaire. Service de sécurisation post-incident inclus. Prévention : audits sécurité réguliers, mises à jour proactives."
   },
   {
     "question": "Comment optimisez-vous la vitesse de chargement des sites ?",
     "answer": "Optimisation complète : compression images, minification code, cache intelligent, CDN si nécessaire, optimisation base de données, lazy loading. Objectif : temps de chargement < 3 secondes, scores Google PageSpeed > 90."
   },
   {
     "question": "Gérez-vous les mises à jour de plugins et thèmes WordPress ?",
     "answer": "Mises à jour automatisées avec tests préalables : plugins, thèmes, core WordPress. Sauvegarde avant chaque mise à jour, tests fonctionnels, rollback si problème détecté. Votre site reste toujours à jour et sécurisé."
   },
   {
     "question": "Proposez-vous un service de récupération de site en cas de crash ?",
     "answer": "Service de récupération d'urgence : diagnostic crash, restauration depuis sauvegardes, réparation fichiers corrompus, optimisation préventive. Intervention sous 4h, site remis en ligne rapidement avec améliorations de stabilité."
   }
 ]
};

const categoryTitles: { [key: string]: string } = {
    general: "Questions Générales",
    process: "Processus & Collaboration",
    website_services: "Création de Site Web",
    marketing_services: "Marketing Digital & SEO",
    career_services: "CV & Carrière",
    automation_ai_services: "IA & Automatisation",
    technical_support: "Support Technique & Maintenance",
};


const whatsappUrl = "https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20une%20question%20suite%20%C3%A0%20la%20lecture%20de%20votre%20FAQ.";

export default function FAQPage() {
  return (
    <div className="bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Foire Aux Questions (FAQ)</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses à vos questions les plus fréquentes sur nos services et notre processus.
          </p>
        </header>

        <main className="bg-background p-8 md:p-12 rounded-lg shadow-sm">
          <div className="space-y-10">
            {Object.entries(faqData).map(([category, items]) => (
                 <div key={category}>
                    <h2 className="text-2xl font-bold font-headline text-primary mb-6">{categoryTitles[category]}</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {items.map((item, index) => (
                        <AccordionItem key={`${category}-${index}`} value={`item-${category}-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                            {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ))}
          </div>
        </main>

        <footer className="mt-16 text-center">
            <h3 className="text-2xl font-bold font-headline text-primary">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mt-3 text-muted-foreground">Contactez-nous directement. Nous sommes là pour vous aider.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href={whatsappUrl} target='_blank'>
                        <MessageCircle className="mr-2" />
                        Discuter sur WhatsApp
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="mailto:nexusai.maroc@outlook.com">
                        <Mail className="mr-2" />
                        Envoyer un e-mail
                    </Link>
                </Button>
            </div>
        </footer>

      </div>
    </div>
  );
}
