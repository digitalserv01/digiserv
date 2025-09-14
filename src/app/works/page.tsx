'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Handshake, Lightbulb, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import StructuredData, { organizationSchema, collectionPageSchema, breadcrumbSchema } from '../../components/StructuredData';

export default function Works() {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://amadigiconseils.com" },
    { name: "Projets", url: "https://amadigiconseils.com/works" }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Structured Data */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={collectionPageSchema} />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-white/60 tracking-wide uppercase mb-4"
            >
              Notre histoire
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6"
            >
              Votre agence digitale au Maroc
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Notre agence web digitale maroc combine expertise technique, créativité et intelligence artificielle pour transformer 
              les défis des entrepreneurs marocains en opportunités de succès.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Success Plan Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight mb-4">
              Notre plan pour le succès digital
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Quatre piliers de notre agence communication digitale maroc, quatre histoires de croissance.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Project 1 - Zibran.ma */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 shadow-lg">
                <img
                  alt="Zibran.ma"
                  src="/zibran.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-light mb-4">Zibran.ma</h3>
                <p className="text-white/70 leading-relaxed">
                  Nous avons développé une stratégie e-commerce complète, augmentant les ventes en ligne de 120% 
                  en six mois grâce à un SEO ciblé, une expérience utilisateur fluide et un processus de paiement à haute conversion.
                </p>
              </div>
            </motion.div>

            {/* Project 2 - Younipouf.fr */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 shadow-lg">
                <img
                  alt="Younipouf.fr"
                  src="/younipouf.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-light mb-4">Younipouf.fr</h3>
                <p className="text-white/70 leading-relaxed">
                  De l'identité de marque à une campagne virale sur les réseaux sociaux, nous avons bâti un écosystème 
                  digital qui a captivé le marché jeune, menant à une augmentation de 300% de l'engagement et des ventes record au lancement.
                </p>
              </div>
            </motion.div>

            {/* Project 3 - 360luxury.shop */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 shadow-lg">
                <img
                  alt="360luxury.shop"
                  src="/360luxury.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-light mb-4">360luxury.shop</h3>
                <p className="text-white/70 leading-relaxed">
                  Pour cette place de marché haut de gamme, nous avons mis en œuvre une stratégie marketing exclusive 
                  axée sur le contenu qui a attiré une clientèle de niche, résultant en une valeur de commande moyenne 75% plus élevée que la norme du secteur.
                </p>
              </div>
            </motion.div>

            {/* Project 4 - Mimidsofa.ma */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-xl bg-white/5 shadow-lg">
                <video
                  src="/ok.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-light mb-4">Mimidsofa.ma</h3>
                <p className="text-white/70 leading-relaxed">
                  Nous avons transformé une entreprise de meubles traditionnelle en une marque digitale. En créant un catalogue 
                  en ligne visuellement riche et en automatisant la génération de leads, nous avons étendu leur portée de marché à travers le Maroc.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[60vh] lg:h-[80vh] bg-white/5 flex items-center justify-center overflow-hidden rounded-2xl mx-8"
        >
          <video
            src="/ok2.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          
        </motion.div>
        <div className="relative text-center z-10 p-8 bg-black/50 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-4">
              Nos créations en mouvement
            </h2>
            <p className="text-lg text-white/80">
              Donner vie aux idées.
            </p>
          </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight mb-6">
              Ce n'est pas un service. C'est un partenariat.
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Notre agence marketing digitale maroc n'est pas payée pour des tâches. Nous sommes payés pour construire votre vision, à 360°. 
              C'est notre promesse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Check,
                title: "La Vision Avant la Tâche",
                description: "Nous ne construisons pas seulement ce que vous demandez. Nous collaborons avec vous pour comprendre votre \"pourquoi\" et élaborer une stratégie qui donne vie à votre vision complète."
              },
              {
                icon: Check,
                title: "Partenaires de Croissance",
                description: "Votre succès est notre succès. Nous nous intégrons à votre équipe, fournissant des informations transparentes et agissant comme une véritable extension de votre entreprise."
              },
              {
                icon: Check,
                title: "L'Artisanat du Code et du Contenu",
                description: "Chaque ligne de code, chaque pixel, chaque mot est intentionnellement conçu non seulement pour être esthétique, mais aussi pour performer et convertir."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl h-full"
              >
                <div className="w-8 h-8 text-white/60 bg-white/10 p-1.5 rounded-md mb-6">
                  <item.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-light mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-extralight mb-6">Nos Valeurs Fondamentales</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien dans chaque projet que nous entreprenons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Partenariat",
                description: "Votre succès est notre succès. Nous travaillons à vos côtés, en totale transparence, comme une extension de votre équipe."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Nous sommes passionnés par la technologie et l'IA. Nous veillons constamment pour vous proposer les solutions les plus performantes et créatives."
              },
              {
                icon: ShieldCheck,
                title: "Intégrité",
                description: "La confiance est le fondement de toute collaboration. Nous nous engageons à une éthique de travail irréprochable et à des conseils honnêtes."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center h-full"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-6">
                  <value.icon className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-light mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight text-black mb-4">
              Une idée ? Construisons son univers.
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Arrêtez de chercher un freelance. Cherchez un partenaire. Parlons de votre vision, 
              pas seulement de votre budget.
            </p>
            <motion.a
              href="https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20suis%20intéressé(e)."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-6 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Démarrer la conversation sur WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[6rem] xs:text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-extralight leading-none text-white/[0.03] text-center select-none"
            >
              ©2025
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-sm opacity-60 leading-relaxed mb-8">
                Nous créons des expériences digitales expressives et performantes en combinant 
                design épuré et développement natif pour aider les équipes créatives et les 
                marques modernes à se démarquer avec intention.
              </p>

              <Link href="/" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all">
                RETOUR À L'ACCUEIL
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex gap-8 text-sm">
                <span className="font-medium">Liens rapides</span>
              </div>
              <div className="flex gap-6 text-sm opacity-60">
                <Link href="/" className="hover:opacity-100 transition-opacity">Accueil,</Link>
                <Link href="/works" className="hover:opacity-100 transition-opacity">Projets,</Link>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact,</Link>
                <Link href="/#about" className="hover:opacity-100 transition-opacity">À propos</Link>
              </div>

              <div className="flex gap-6 text-sm opacity-60 pt-4">
                <a href="https://github.com/madaffrager" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub,</a>
                <a href="https://www.annuairedesavocats.ma/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Annuaire des Avocats,</a>
                <a href="https://wa.me/212699020158" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
