'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plus, Check, ArrowUpRight } from 'lucide-react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const faqItems = [
    {
      question: "Quels sont les services proposés par votre agence digitale au Maroc ?",
      answer: "Notre agence digitale maroc offre une gamme complète de services : création de sites web, développement d'applications mobiles, stratégies marketing digital, référencement SEO/SEA, gestion des réseaux sociaux, et conception graphique."
    },
    {
      question: "Combien coûte la création d'un site web au Maroc ?",
      answer: "Les tarifs varient selon la complexité du projet. Un site vitrine commence à partir de 8 000 MAD, tandis qu'un site e-commerce démarre à 15 000 MAD. Nous proposons des devis personnalisés gratuits."
    },
    {
      question: "Dans quelles villes du Maroc intervenez-vous ?",
      answer: "Notre agence digitale casablanca maroc dessert tout le territoire national. Nous avons des équipes à Casablanca, Rabat, Marrakech et proposons nos services dans toutes les régions du Maroc."
    },
    {
      question: "Quel est le délai de livraison d'un projet digital ?",
      answer: "Les délais dépendent de la complexité : 2-3 semaines pour un site vitrine, 4-6 semaines pour un site e-commerce, et 6-12 semaines pour des applications sur mesure. Nous respectons toujours les délais convenus."
    },
    {
      question: "Proposez-vous un accompagnement après la livraison ?",
      answer: "Oui, notre agence web digitale maroc assure un suivi post-livraison avec maintenance, mises à jour de sécurité, formation aux outils, et support technique pendant 3 mois minimum."
    },
    {
      question: "Comment optimisez-vous le référencement des sites web ?",
      answer: "Nous appliquons les meilleures pratiques SEO : optimisation technique, contenu de qualité, netlinking local, référencement mobile-first, et stratégies adaptées au marché marocain."
    },
    {
      question: "Travaillez-vous avec des entreprises de toutes tailles ?",
      answer: "Absolument ! Notre agence communication digitale maroc accompagne aussi bien les TPE/PME que les grandes entreprises, en adaptant nos solutions à chaque budget et besoin spécifique."
    },
    {
      question: "Quels sont vos tarifs pour le marketing digital ?",
      answer: "Nos forfaits marketing digital démarrent à 3 500 MAD/mois pour la gestion des réseaux sociaux, et 5 000 MAD/mois pour des campagnes publicitaires complètes (Google Ads + Facebook Ads)."
    },
    {
      question: "Créez-vous des applications mobiles ?",
      answer: "Oui, notre équipe développe des applications iOS et Android natives ou hybrides. Nous maîtrisons React Native, Flutter, et les technologies natives Swift/Kotlin."
    },
    {
      question: "Comment puis-je obtenir un devis pour mon projet ?",
      answer: "Contactez notre agence digitale maroc via le formulaire en ligne, par téléphone ou email. Nous organisons un rendez-vous gratuit pour analyser vos besoins et vous proposer une solution sur mesure."
    },
    {
      question: "Proposez-vous des formations digitales ?",
      answer: "Oui, nous dispensons des formations sur les outils digitaux, le marketing en ligne, la gestion de sites web, et les réseaux sociaux, adaptées aux équipes marocaines."
    },
    {
      question: "Gérez-vous l'hébergement et la maintenance des sites ?",
      answer: "Notre agence marketing digitale maroc propose des solutions d'hébergement sécurisé au Maroc et à l'international, avec maintenance préventive et corrective incluse dans nos contrats."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden" ref={containerRef}>
      {/* Header */}
      <Header />

      {/* Hero Section with 3D Element */}
      <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-8 pt-20">
        {/* 3D Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <img
            src="/mascot.webp"
            alt="3D Element"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Background Large Text - Now in normal flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative z-0 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 pointer-events-none px-4"
        >
          <h2 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] font-extralight leading-none text-white/[0.3] select-none text-center">
            AMADIGI<sup className="text-[40%]">™</sup>
          </h2>
        </motion.div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 max-w-[1600px] mx-auto w-full relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* Left aligned content */}
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm mb-2 font-light"
              >
                Agence Digitale Maroc • Marketing Digital • Branding • Stratégie Web au Maroc
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-12"
              >
                Votre Agence Digitale au Maroc
                <br />
                Des Schémas et Des Moments qui
                <br />
                Se Connectent et Laissent 
                <br />
              Une Image Forte, dont vous serez fier.<span className="opacity-40 font-normal"> イメージ</span>.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 text-xs tracking-wide"
              >
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 py-1 border border-white/20 rounded-full whitespace-nowrap">RÉSULTATS</span>
                  <span className="px-3 py-1 border border-white/20 rounded-full whitespace-nowrap">COLLABORATIVE</span>
                  <span className="px-3 py-1 border border-white/20 rounded-full whitespace-nowrap">TRANSPARENCE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  <span className="opacity-60 text-xs sm:text-xs">© Meilleure Agence Digitale au Maroc ビアュル</span>
                  <span className="opacity-60 text-xs sm:text-xs sm:ml-auto">SUCCÈS DIGITAL</span>
                </div>
              </motion.div>
            </div>

            {/* Right side image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-lg"
            >
              <img
                src="/sonder-goods.png"
                alt="Sonder Goods Project"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Brand Badge Section */}
      <section className="py-8 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
              <span className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs">
              🟢 Support 24/7
              </span>
            <span className="text-xs opacity-40">Maroc</span>
          </motion.div>
        </div>
      </section>

      {/* Optimize Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-[500px] flex items-center justify-center"
          >
            {/* Overlapping Circles Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { duration: 1.2, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="absolute top-8 left-8 md:left-16 lg:left-24"
            >
              <div className="relative w-16 h-16">
                {/* Circle 1 */}
                <motion.div 
                  className="absolute w-8 h-8 border border-white/30 rounded-full top-0 left-0"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.2 }
                  }}
                  viewport={{ once: true }}
                />
                {/* Circle 2 - overlapping middle */}
                <motion.div 
                  className="absolute w-8 h-8 border border-white/30 rounded-full top-0 left-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.4 }
                  }}
                  viewport={{ once: true }}
                />
                {/* Circle 3 - overlapping right */}
                <motion.div 
                  className="absolute w-8 h-8 border border-white/30 rounded-full top-0 left-8"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.6 }
                  }}
                  viewport={{ once: true }}
                />
            </div>
            </motion.div>

            {/* Text Elements */}
            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-12">
              {/* Optimiser - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  opacity: 0.8,
                  transition: { duration: 0.3 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/50 self-end mr-8 md:mr-16 lg:mr-24 tracking-wider cursor-pointer"
              >
                OPTIMISER
              </motion.div>

              {/* Captiver - Middle Left */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.5,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  opacity: 0.9,
                  transition: { duration: 0.3 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/75 self-start ml-8 md:ml-16 lg:ml-24 tracking-wider cursor-pointer"
              >
                CAPTIVER
              </motion.div>

              {/* Convertir - Bottom Center */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.7,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight self-center tracking-wider cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                CONVERTIR
              </motion.div>
            </div>

            {/* Floating particles for extra visual appeal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with large text */}
      <section id="about" className="pt-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
                <span className="text-7xl lg:text-8xl">13+</span> ans
                <sup className="text-xs opacity-40">™</sup> d'expertise en agence digitale maroc : des interactions précises, une créativité sans relâche.
              </h3>

              <p className="text-sm md:text-base opacity-70 leading-relaxed mt-6 max-w-2xl">
              Notre agence web digitale maroc a collaboré avec des marques visionnaires et des équipes innovantes pour créer des expériences digitales à la fois remarquables et performantes. Notre approche allie stratégie et précision, garantissant des projets qui conjuguent esthétique et impact.              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                CONSTRUISONS VOS IDÉES
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section with overlapping cards */}
      <section id="work" className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© PROJETS EN VEDETTE プロジェクト</span>
              <span className="text-xs opacity-60">DESIGN & DÉVELOPPEMENT</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight max-w-5xl">
            Chaque projet est une opportunité de mêler design et développement, transformant des idées interactives audacieuses en <span className="opacity-40">réalités digitales élégantes</span> — conçues avec intention par notre agence digitale au maroc, rapidité et clarté visuelle pour séduire un large public. </h2>

            <motion.a
              href="/works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all mt-8"
            >
              VOIR LES PROJETS
            </motion.a>
          </motion.div>

          {/* Overlapping Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {[
              {
                title: "Mimid Sofa",
                category: "Branding",
                number: "(01)",
                image: "/sonder-goods.png"
              },
              {
                title: "La Ferme Nomade Agafay",
                category: "Design Web",
                number: "(02)",
                image: "/halo-wear.jpeg",
                offset: true
              },
              {
                title: "Annuaire Des Avocats",
                category: "Developpement Full Stack",
                number: "(03)",
                image: "/profile.jpeg"
              },
              {
                title: "Le Bistrot d'Amaia",
                category: "Image Digitale",
                number: "(04)",
                image: "/arc-bloom.png",
                offset: true
              },
              {
                title: "ESF Voyages",
                category: "Social Media",
                number: "(05)",
                image: "/atelier-nara.png"
              }
            ].map((project, index) => (
              <motion.a
                key={index}
                href="/works"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative group cursor-pointer block ${project.offset ? 'md:-mt-20' : ''} mb-8`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Tag */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <h3 className="text-2xl font-light">{project.title}</h3>
                    <span className="text-sm opacity-60">{project.number}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© NOS SERVICES サービス内容</span>
              <span className="text-xs opacity-60">EXECUTION DIGITAL</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8">Services</h2>

            <div className="flex gap-12 text-sm">
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Structurés</span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Agiles</span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Scalables</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              {
    "title": "Création de Sites Web",
    "description": "Notre agence communication digitale maroc conçoit des sites vitrines et sur-mesure (WordPress & Next.js), alliant design moderne et performance technique pour captiver vos visiteurs."
              },
              {
    "title": "Audit & Optimisation",
    "description": "Nous analysons votre site actuel pour identifier ses freins et optimiser son référencement, son UX et sa conversion afin de générer de vrais résultats."
              },
              {
    "title": "Marketing Digital & SEO",
    "description": "De la stratégie de contenu au netlinking, en passant par le SEO local et international, notre agence marketing digitale maroc maximise votre visibilité et votre trafic qualifié."
              },
              {
    "title": "Automatisation & Outils AI",
    "description": "Nous intégrons des pipelines d'automatisation et des solutions AI pour optimiser vos campagnes, gérer vos leads et simplifier vos processus marketing."
              }
]
.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-light">{service.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© EXPERIENCE エクスペリエンス</span>
              <span className="text-xs opacity-60">Notre Art Digital</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Collaborations</h3>
              <div className="space-y-6">
                {[

  { "company": "AMADIGI", "role": "Stratège et Consultant Digital", "location": "Casablanca, Maroc", "years": "2013 – présent" },
  { "company": "Projets Freelance", "role": "Développeur Web & Designer", "location": "Maroc / France", "years": "2015 – présent" },
  { "company": "Startups Diverses", "role": "Spécialiste SEO & Marketing", "location": "Maroc / France", "years": "2016 – présent" },
  { "company": "Projets AI & Automatisation", "role": "Consultant en Intégration AI et Automatisation", "location": "Remote", "years": "2020 – présent" }


                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10 pb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{job.company}</h4>
                        <p className="text-sm opacity-60">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{job.location}</p>
                        <p className="text-xs opacity-40">{job.years}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-8">PUBLICATIONS</h3>
              <div className="space-y-6">
                {[
                  { 
                    company: "Medium", 
                    role: "Déconstruction de l'algorithme du plus court chemin : théorie vs implémentation", 
                    location: "En ligne", 
                    years: "14 août 2025" 
                  },
                  { 
                    company: "Medium", 
                    role: "Quoi de neuf dans Java 17 et Java 21 : exploiter la puissance du Java moderne", 
                    location: "En ligne", 
                    years: "1 janvier 2025" 
                  },
                  { 
                    company: "Medium", 
                    role: "Prompt Engineering 101", 
                    location: "En ligne", 
                    years: "14 septembre 2025" 
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10 pb-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{job.company}</h4>
                        <p className="text-sm opacity-60">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{job.location}</p>
                        <p className="text-xs opacity-40">{job.years}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© TÉMOIGNAGES レビュー</span>
              <span className="text-xs opacity-60">AVIS RÉELS</span>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all"
            >
              CONTACTEZ-NOUS
            </motion.a>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                quote: "Nous avons collaboré avec cette agence digitale casablanca maroc sur plusieurs projets digitaux, et leur professionnalisme ainsi que leur créativité nous ont pleinement satisfaits. Une équipe réactive, à l'écoute et toujours force de proposition. Un partenaire fiable que nous recommandons sans hésitation.",
                author: "La Ferme Nomade Agafay",
                role: "CTO",
                image: "/testimonial-1.jpeg",
                company: "La Ferme Nomade Agafay"
              },
              {
                quote: "AMADIGI aborde chaque projet avec passion et détermination. Leur travail ne se limite pas à l'apparence : chaque élément est réfléchi, connecté et optimisé. Une équipe compétente, créative et fiable pour tous vos besoins digitaux au Maroc.",
                author: "Babel Stone",
                role: "CEO",
                image: "/testimonial-pierre.jpg",
                company: "Marbre et Pierre Naturelle"
              },
              {
                quote: "Une équipe professionnelle qui traduit nos besoins et notre imagination en projets réels. Toujours à l'écoute et proactive, cette agence de communication digitale maroc a su concrétiser notre vision avec efficacité et créativité.",
                author: "Boutique De Maison D'Amaia",
                role: "Responsable Marketing",
                image: "/Logo-bistrot.jpg",
                company: "Boutique De Maison D'Amaia"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full sm:w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                      className="w-full h-full object-cover"
                  />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{testimonial.author} 🔵</h4>
                    <p className="text-sm opacity-60">{testimonial.role}</p>
                  </div>
                  <span className="text-sm font-medium">{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© RÉCOMPENSES アワード</span>
              <span className="text-xs opacity-60">DISTINCTIONS SÉLECTIONNÉES</span>
            </div>
          </motion.div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-light mb-8">Best Innovator</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["/award-4.png",
                  "/fwa-2.png",
                  "/fwa-3.jpeg",
                  "/fwa-2.png",
                ].map((img, i) => (
                  <img key={i} src={img} alt="Award" className="w-full h-48 object-cover rounded" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">74x sites web créés</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/fwa-2.png",
                  "/fwa-4.png",
                  "/fwa-2.png",
                  "/testimonial-3.png",
                ].map((img, i) => (
                  <img key={i} src={img} alt="Award" className="w-full h-48 object-cover rounded" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-8">14x Transformations digitales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/fwa-1.png",
                  "/fwa-2.png",
                  "/award-8.png",
                  "/fwa-2.png",
                ].map((img, i) => (
                  <img key={i} src={img} alt="Award" className="w-full h-48 object-cover rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs opacity-60">© TARIFS DES PROJETS プラン</span>
              <span className="text-xs opacity-60">DEVIS PERSONNALISÉS</span>
            </div>

            <div className="flex items-baseline gap-8">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight">TARIFS</h2>
              <div className="flex gap-8 text-sm">
                <span>Transparence</span>
                <span>Forfaits Design, Développement & Marketing</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plan Découverte",
                price: "2990 MAD",
                period: "",
                description: "Idéal pour lancer votre présence digitale rapidement avec une image professionnelle.",
                features: [
                  "Brief créatif et analyse des besoins",
                  "Conception d'une page principale",
                  "Design responsive mobile-first",
                  "Maquette visuelle & interface UX",
                  "Intégration d'un formulaire de contact",
                  "Optimisation SEO de base",
                  "Configuration CMS simplifiée",
                  "Livraison rapide"
                ]
              },
              {
                title: "Plan Croissance",
                price: "4990 MAD",
                period: "",
                description: "Pour les marques qui souhaitent renforcer leur présence en ligne et automatiser certains flux.",
                features: [
                  "Analyse approfondie et audit de site existant",
                  "Jusqu'à 5 pages optimisées",
                  "Sections CMS dynamiques",
                  "Animations & transitions interactives",
                  "UX/UI design avancé",
                  "Optimisation multi-devices",
                  "Guide de style & identité visuelle",
                  "Intégration d'email marketing et CTA"
                ],
                featured: true
              },
              {
                title: "Plan Complet",
                price: "8990 MAD",
                period: "",
                description: "Pour les entreprises et studios cherchant une image digitale complète et performante.",
                features: [
                  "Audit complet et stratégie digitale",
                  "10+ pages avec CMS avancé",
                  "Système de marque complet",
                  "Direction artistique & motion design",
                  "Composants personnalisés et interactifs",
                  "Formation CMS et gestion du contenu",
                  "Support lancement + QA",
                  "Optimisation des performances"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 border rounded-2xl relative ${
                  plan.featured
                    ? 'border-white bg-white/5'
                    : 'border-white/20'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-light mb-2">{plan.title}</h3>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-extralight">{plan.price}</span>
                      <span className="text-sm opacity-60 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm opacity-60 mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full transition-all text-sm font-medium ${
                      plan.featured
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'border border-white/20 hover:bg-white hover:text-black'
                    }`}
                  >
                    Commencer
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs opacity-60">© FINAL SECTION クロージング</span>
              <span className="text-xs opacity-60">STUDIO WRAP</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight">FAQ.</h2>
          </motion.div>

          <div className="max-w-3xl space-y-1">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-6 text-left flex items-center justify-between hover:opacity-60 transition-opacity"
                >
                  <span className="text-lg font-light">{item.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-light"
                  >
                    +
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-sm opacity-60 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-32 px-8 bg-zinc-950 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://s7g10.scene7.com/is/image/eng/HR_Join-Us_2?bfc=on&fmt=webp-alpha&dpr=on,3&network=on')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left side - empty for spacing */}
            <aside className="hidden lg:block"></aside>
            
            {/* Right side - content */}
            <aside className="space-y-8">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight"
                >
                  <span>Qui recherchons-nous ?</span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-2xl"
                >
                  <span className="font-light">
                    Des personnes qui aspirent à une carrière professionnelle dans le monde de la technologie, 
                    qui veulent faire la différence chaque jour, et qui aiment comparer, innover, et rendre 
                    les entreprises de plus en plus pertinentes.
                  </span>
                </motion.h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/212699020158?text=Bonjour%20!%20Je%20souhaite%20rejoindre%20l'équipe%20AMADIGI."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-all"
                >
                  Rejoignez-nous
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                >
                  Vie chez AMADIGI
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </aside>
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
              className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-extralight leading-none text-white/[0.3] text-center select-none"
            >
              ©2025
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-sm opacity-60 leading-relaxed mb-8">
                I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
              </p>

              <a href="#home" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all">
                BACK TO TOP
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex gap-8 text-sm">
                <span className="font-medium">Quick Links</span>
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
