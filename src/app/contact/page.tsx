'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StructuredData, { organizationSchema, localBusinessSchema, breadcrumbSchema } from '../../components/StructuredData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const breadcrumbItems = [
    { name: "Accueil", url: "https://amadigiconseils.com" },
    { name: "Contact", url: "https://amadigiconseils.com/contact" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Structured Data */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-8 pt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/arc-bloom.png')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1600px] mx-auto w-full text-center relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm mb-4 font-light"
          >
            Contact • Collaboration • Création
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-8"
          >
            Créons ensemble
            <br />
            votre prochain
            <br />
            <span className="opacity-40 font-normal">projet digital au Maroc</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs"
          >
            <span className="px-3 py-1 border border-white/20 rounded-full">RÉACTIF</span>
            <span className="px-3 py-1 border border-white/20 rounded-full">CRÉATIF</span>
            <span className="px-3 py-1 border border-white/20 rounded-full">PROFESSIONNEL</span>
            <span className="opacity-60">© AMADIGI 2025</span>
          </motion.div>

          {/* 24/7 Support Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a 
              href="https://wa.me/212699020158?text=Bonjour%20!%20J'ai%20vu%20votre%20site%20et%20je%20souhaite%20discuter%20de%20mon%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors"
            >
              🟢 Support WhatsApp 24/7
            </a>
            <span className="text-xs opacity-40">Maroc</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                  Parlons de votre projet digital
                </h2>
                <p className="text-lg opacity-70 leading-relaxed">
                  Que vous ayez une idée précise ou que vous souhaitiez explorer les possibilités, 
                  notre agence digitale maroc est là pour transformer votre vision en réalité digitale.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="font-medium">Email</p>
                  <p className="text-sm opacity-60">contact@amadigi.ma</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="font-medium">Téléphone</p>
                  <a 
                    href="https://wa.me/212699020158?text=AMADIGI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    +212 6 99 02 01 58
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm opacity-60">Casablanca, Maroc - Agence Digitale Casablanca</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="font-medium">Support WhatsApp 24/7</p>
                  <a 
                    href="https://wa.me/212699020158?text=Bonjour%20!%20Je%20souhaite%20discuter%20de%20mon%20projet%20digital."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    Réponse immédiate garantie
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
                >
                  ❌ {errorMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Type de projet
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="website">Site Web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="branding">Branding</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full px-8 py-4 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
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
                title: "Création de Sites Web",
                description: "Notre agence web digitale maroc conçoit des sites vitrines et sur-mesure (WordPress & Next.js), alliant design moderne et performance technique pour captiver vos visiteurs."
              },
              {
                title: "Audit & Optimisation",
                description: "Nous analysons votre site actuel pour identifier ses freins et optimiser son référencement, son UX et sa conversion afin de générer de vrais résultats."
              },
              {
                title: "Marketing Digital & SEO",
                description: "De la stratégie de contenu au netlinking, en passant par le SEO local et international, notre agence marketing digitale maroc maximise votre visibilité et votre trafic qualifié."
              },
              {
                title: "Automatisation & Outils AI",
                description: "Nous intégrons des pipelines d'automatisation et des solutions AI pour optimiser vos campagnes, gérer vos leads et simplifier vos processus marketing."
              }
            ].map((service, index) => (
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

      {/* Testimonials Section */}
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
              <span className="text-xs opacity-60">© TÉMOIGNAGES レビュー</span>
              <span className="text-xs opacity-60">AVIS RÉELS</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight">Témoignages</h2>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                quote: "Nous avons collaboré avec cette agence digitale casablanca maroc sur plusieurs projets digitaux, et leur professionnalisme ainsi que leur créativité nous ont pleinement satisfaits. Une équipe réactive, à l'écoute et toujours force de proposition.",
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
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
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

      {/* CTA Section */}
      <section className="py-32 px-8 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight">
              Prêt à commencer ?
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment nous pouvons 
              transformer vos idées en succès digital.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Démarrer un projet
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="https://wa.me/212699020158?text=Bonjour%20!%20Je%20souhaite%20discuter%20de%20mon%20projet%20digital%20immédiatement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp 24/7
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-extralight leading-none text-white/[0.03] text-center select-none"
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
                <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact,</Link>
                <Link href="/works" className="hover:opacity-100 transition-opacity">Projets,</Link>
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
