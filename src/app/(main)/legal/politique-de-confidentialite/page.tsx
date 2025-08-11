import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | AmadiDigiConseils',
  description: 'Notre politique de confidentialité détaille comment nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD.',
};

export default function PolitiqueConfidentialitePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.amadigiconseils.com/legal/politique-de-confidentialite',
    },
    headline: metadata.title,
    description: metadata.description,
    author: {
      '@type': 'Organization',
      name: 'AmadiDigiConseils',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AmadiDigiConseils',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.amadigiconseils.com/logo.png',
      },
    },
    datePublished: '2023-01-01T08:00:00+00:00',
    dateModified: new Date().toISOString(),
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Politique de Confidentialité</h1>
      </header>
      <p>
        Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, utilisées et partagées lorsque vous visitez ou effectuez une interaction sur amadigiconseils.com (le "Site").
      </p>

      <section>
        <h2>Collecte des Informations Personnelles</h2>
        <p>
          Nous collectons des informations personnelles de deux manières principales :
        </p>
        <ul>
          <li>
            <strong>Informations que vous nous fournissez directement :</strong> Lorsque vous remplissez notre formulaire de contact ou que vous vous abonnez à notre newsletter, vous nous fournissez votre nom, votre adresse e-mail et le contenu de votre message. Ces informations sont stockées de manière sécurisée dans notre base de données Firestore (service Google).
          </li>
          <li>
            <strong>Informations collectées automatiquement :</strong> Lorsque vous naviguez sur le Site, nous pouvons collecter des informations sur votre appareil, y compris des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies qui sont installés sur votre appareil. Nous utilisons ces informations pour améliorer et optimiser notre Site.
          </li>
        </ul>
      </section>

      <section>
        <h2>Utilisation de vos Informations Personnelles</h2>
        <p>
          Nous utilisons les informations que nous collectons pour :
        </p>
        <ul>
          <li>Communiquer avec vous et répondre à vos demandes via le formulaire de contact.</li>
          <li>Vous envoyer notre newsletter et des informations marketing si vous vous y êtes abonné.</li>
          <li>Protéger le site contre les risques de sécurité et la fraude.</li>
          <li>Améliorer et optimiser notre Site (par exemple, en générant des analyses sur la façon dont nos clients naviguent et interagissent avec le Site).</li>
        </ul>
      </section>

      <section>
        <h2>Partage de vos Informations Personnelles</h2>
        <p>
          Nous ne vendons, ne louons et ne partageons pas vos informations personnelles avec des tiers à des fins de marketing. Nous utilisons les services de Google (Firebase/Firestore) pour stocker les données de nos formulaires. Vous pouvez en savoir plus sur la façon dont Google utilise vos informations personnelles ici : <a href="https://www.google.com/intl/fr/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/fr/policies/privacy/</a>.
        </p>
      </section>

      <section>
        <h2>Vos Droits (RGPD)</h2>
        <p>
          Si vous êtes un résident européen, vous disposez des droits suivants concernant vos informations personnelles :
        </p>
        <ul>
          <li>Le droit d'accès : vous avez le droit d'accéder aux informations personnelles que nous détenons à votre sujet.</li>
          <li>Le droit de rectification : vous avez le droit de demander que nous corrigions toute information personnelle inexacte.</li>
          <li>Le droit à l'oubli : vous avez le droit de demander la suppression de vos informations personnelles.</li>
          <li>Le droit à la limitation du traitement et le droit d'opposition.</li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail indiquée dans les mentions légales.
        </p>
      </section>

      <section>
        <h2>Conservation des Données</h2>
        <p>
          Lorsque vous nous soumettez des informations via le formulaire de contact ou la newsletter, nous conserverons ces informations dans nos registres à moins et jusqu'à ce que vous nous demandiez de les supprimer.
        </p>
      </section>

      <section>
        <h2>Modifications</h2>
        <p>
          Nous pouvons être amenés à modifier cette politique de confidentialité de temps à autre afin de refléter, par exemple, des changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
        </p>
      </section>

       <section>
        <h2>Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité, veuillez nous contacter par e-mail à l'adresse indiquée dans les mentions légales de ce site.
        </p>
      </section>
    </>
  );
}
