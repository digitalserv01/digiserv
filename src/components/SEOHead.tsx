import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = "AMADIGI - Agence Digitale Maroc | Création Sites Web & Marketing Digital",
  description = "Votre agence digitale maroc spécialisée dans la création de sites web, marketing digital, branding et stratégie web. Expertise locale à Casablanca et dans tout le Maroc.",
  keywords = [
    "agence digitale maroc",
    "agence digitale au maroc",
    "agence web digitale maroc",
    "agence communication digitale maroc",
    "création site web maroc",
    "marketing digital maroc"
  ],
  canonicalUrl = "https://amadigiconseils.com",
  ogImage = "/logo.webp",
  ogType = "website",
  noindex = false
}: SEOHeadProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="AMADIGI" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="fr-MA" />
      <meta name="language" content="French (Morocco)" />
      <meta name="geo.region" content="MA" />
      <meta name="geo.country" content="Morocco" />
      <meta name="geo.placename" content="Casablanca" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="AMADIGI" />
      <meta property="og:image" content={`https://amadigiconseils.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="fr_MA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://amadigiconseils.com${ogImage}`} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-title" content="AMADIGI" />
      <meta name="application-name" content="AMADIGI" />
      
      {/* Business/Contact Information */}
      <meta name="contact" content="contact@amadigi.ma" />
      <meta name="phone" content="+212-6-99-02-01-58" />
      <meta name="address" content="Casablanca, Maroc" />
      
      {/* Schema.org JSON-LD will be added by StructuredData component */}
    </Head>
  );
}
