'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plus, Check, ArrowUpRight } from 'lucide-react';
import { useState, useRef } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "I offer comprehensive digital design services including art direction, brand identity, motion direction, and custom Framer site development."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Project timelines vary based on scope, but typically range from 2-8 weeks for most projects. Rush delivery is available for an additional fee."
    },
    {
      question: "Do you only work in Framer?",
      answer: "While I specialize in Framer for its design-to-development capabilities, I also work with other modern frameworks when project requirements demand it."
    },
    {
      question: "Can you handle both design and build?",
      answer: "Absolutely. I provide end-to-end services from initial concept and design through development and deployment."
    },
    {
      question: "Do you offer brand strategy too?",
      answer: "Yes, brand strategy is an integral part of my process. I help define positioning, messaging, and visual identity systems."
    },
    {
      question: "What's your process like?",
      answer: "My process is collaborative and iterative, starting with discovery, moving through design exploration, and ending with development and launch support."
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
                Art Direction • Branding • Strategy • Web Design
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-12"
              >
                Pattern Dimensions
                <br />
                and Moments that
                <br />
                Connect and Leave a
                <br />
                Bold <span className="opacity-40 font-normal">イメージ</span>.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-8 text-xs tracking-wide"
              >
                <span className="px-3 py-1 border border-white/20 rounded-full">Branding</span>
                <span className="opacity-60">© CURATED INTERFACES ビジュアル</span>
                <span className="ml-auto opacity-60">DIGITAL DESIGNER</span>
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

          {/* Large Akihiko Brand Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute bottom-10 left-0 right-0"
          >
            <div className="flex items-center gap-4 mt-8">
              <span className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs">
                🟢 Use for Free
              </span>
              <span className="text-xs opacity-40">Made in Framer</span>
            </div>
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
                <span className="text-7xl lg:text-8xl">13+</span> years
                <sup className="text-xs opacity-40">™</sup> of digital form, sharp interactions, and relentless creative discipline and effort.
              </h3>

              <p className="text-sm md:text-base opacity-70 leading-relaxed mt-6 max-w-2xl">
                Throughout my career, I've had the privilege of working with forward-thinking brands and innovative teams, crafting digital experiences that not only look exceptional but perform flawlessly. My approach combines strategic thinking with meticulous attention to detail, ensuring every project delivers both aesthetic excellence and functional brilliance.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                CONTACT
              </motion.button>
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
              <span className="text-xs opacity-60">© FEATURED PROJECTS プロジェクト</span>
              <span className="text-xs opacity-60">CREATIVE DEVELOPMENT</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight max-w-5xl">
              Every project is a chance to blend design and development, shaping bold interactive ideas into{' '}
              <span className="opacity-40">sleek digital realities</span> — built with intent, speed, and visual clarity that attracts lot of peoples.
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all mt-8"
            >
              SEE WORKS
            </motion.button>
          </motion.div>

          {/* Overlapping Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {[
              {
                title: "Sonder Goods",
                category: "Branding",
                number: "(01)",
                image: "/sonder-goods.png"
              },
              {
                title: "Halo Wear",
                category: "Web Design",
                number: "(02)",
                image: "/halo-wear.jpeg",
                offset: true
              },
              {
                title: "Lucent Lab",
                category: "Creative Direction",
                number: "(03)",
                image: "/profile.jpeg"
              },
              {
                title: "Arc & Bloom",
                category: "Identity Design",
                number: "(04)",
                image: "/arc-bloom.png",
                offset: true
              },
              {
                title: "Atelier Nara",
                category: "Portfolio Site",
                number: "(05)",
                image: "/atelier-nara.png"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative group cursor-pointer ${project.offset ? 'md:-mt-20' : ''} mb-8`}
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
              </motion.div>
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
              <span className="text-xs opacity-60">© CAPABILITIES サービス内容</span>
              <span className="text-xs opacity-60">DIGITAL EXECUTION</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8">Services</h2>

            <div className="flex gap-12 text-sm">
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Structured</span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Focused</span>
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">Visual</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              {
                title: "Art Direction",
                description: "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint."
              },
              {
                title: "Brand Identity",
                description: "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable."
              },
              {
                title: "Motion Direction",
                description: "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention."
              },
              {
                title: "Framer Sites",
                description: "Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision."
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
              <span className="text-xs opacity-60">DIGITAL CRAFT</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Creative Collabs</h3>
              <div className="space-y-6">
                {[
                  { company: "Clavmen Studio", role: "Art Director & Designer", location: "Tokyo", years: "2022 - present" },
                  { company: "Modular Eight", role: "Senior Developer", location: "Osaka", years: "2020 – 2022" },
                  { company: "Haus of Signal", role: "Creative Technologist", location: "Berlin", years: "2018 – 2020" }
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
              <h3 className="text-2xl font-light mb-8">Studio</h3>
              <div className="space-y-6">
                {[
                  { company: "Studio Orbit", role: "UI/UX Designer", location: "Dallas", years: "2016 – 2018" },
                  { company: "Novaform Labs", role: "Junior Designer", location: "Kyoto", years: "2014 – 2016" }
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
              <span className="text-xs opacity-60">© TESTIMONIALS レビュー</span>
              <span className="text-xs opacity-60">REAL FEEDBACK</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                quote: "Akihiko elevated every layer of our brand's online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth.",
                author: "Lisa Kuroda",
                role: "Founder, Studio Analog",
                image: "/testimonial-1.jpeg",
                company: "Calro"
              },
              {
                quote: "Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it's about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision, and his build quality.",
                author: "Daniel Reyes",
                role: "Director, Framehaus",
                image: "/testimonial-2.png",
                company: "Calro"
              },
              {
                quote: "His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every part of the work.",
                author: "Mei Tanaka",
                role: "UX Designer, Nuro",
                image: "/testimonial-3.png",
                company: "Calro"
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

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
              <span className="text-xs opacity-60">© AWARDS アワード</span>
              <span className="text-xs opacity-60">SELECTED HONORS</span>
            </div>
          </motion.div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-light mb-8">27x Awwwards</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/award-1.png",
                  "/award-2.jpeg",
                  "/award-3.png",
                  "/award-4.png"
                ].map((img, i) => (
                  <img key={i} src={img} alt="Award" className="w-full h-48 object-cover rounded" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-8">14x FWA</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/fwa-1.png",
                  "/fwa-2.png",
                  "/fwa-3.jpeg",
                  "/fwa-4.png"
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
              <span className="text-xs opacity-60">© PROJECT PRICING プラン</span>
              <span className="text-xs opacity-60">CUSTOM QUOTES</span>
            </div>

            <div className="flex items-baseline gap-8">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight">Pricing</h2>
              <div className="flex gap-8 text-sm">
                <span>Transparent</span>
                <span>Design Packages</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter Plan",
                price: "$99",
                period: "/Month",
                description: "Perfect for small launches and personal sites that need a fast online presence.",
                features: [
                  "One-page Framer site",
                  "Custom layout & visuals",
                  "Mobile-first responsive build",
                  "Fast delivery (within 7 days)",
                  "Design system setup",
                  "SEO-ready structure",
                  "Basic CMS integration",
                  "Contact form setup"
                ]
              },
              {
                title: "Growth Plan",
                price: "$299",
                period: "/Month",
                description: "Designed for growing brands that need flexibility and CMS support.",
                features: [
                  "Up to 5 pages",
                  "Framer CMS-powered sections",
                  "Component-based structure",
                  "Motion design & transitions",
                  "Clean UX-focused layout",
                  "Device-optimized responsiveness",
                  "Style guide system",
                  "Email capture / integrations"
                ],
                featured: true
              },
              {
                title: "Full Scope Plan",
                price: "$899",
                period: "/Month",
                description: "Best for studios or teams needing structure and enterprise-level execution.",
                features: [
                  "10+ pages with CMS",
                  "Advanced layout strategy",
                  "Full brand system support",
                  "Animation direction",
                  "Custom-built components",
                  "Framer CMS training",
                  "Launch support + QA",
                  "Performance optimization"
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

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full transition-all text-sm font-medium ${
                      plan.featured
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'border border-white/20 hover:bg-white hover:text-black'
                    }`}
                  >
                    Get Started
                  </motion.button>
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
                I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
              </p>

              <button className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-xs hover:bg-white hover:text-black transition-all">
                BACK TO TOP
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-8 text-sm">
                <span className="font-medium">Quick Links</span>
              </div>
              <div className="flex gap-6 text-sm opacity-60">
                <a href="#" className="hover:opacity-100 transition-opacity">Home,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Gallery,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Work,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
              </div>

              <div className="flex gap-6 text-sm opacity-60 pt-4">
                <a href="#" className="hover:opacity-100 transition-opacity">Instagram,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Dribbble,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Framer,</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
