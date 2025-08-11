import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | AmadiDigiConseils',
  description: 'Consultez nos conditions générales de vente (CGV) pour nos services de création de site web, SEO, et autres prestations digitales. Apprenez-en plus sur nos modalités de collaboration.',
};

export default function CGVPage() {
    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.amadigiconseils.com/legal/cgv',
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
        <h1>Conditions Générales de Vente</h1>
      </header>
      <section>
        <h2>Article 1 : Objet</h2>
        <p>
          Les présentes conditions générales de vente (CGV) visent à définir les relations contractuelles entre AmadiDigiConseils (le "Prestataire") et le Client, ainsi que les conditions applicables à toute prestation de services commandée par le biais du site amadigiconseils.com. L’acquisition d’un service implique une acceptation sans réserve par le client des présentes conditions de vente dont le client reconnaît avoir pris connaissance préalablement à sa commande.
        </p>
      </section>

      <section>
        <h2>Article 2 : Services Proposés</h2>
        <p>
          Les services proposés sont ceux qui figurent sur la page "Services" du site. Ces services incluent, sans s'y limiter, la création de sites web, la rédaction de CV, le marketing digital, la création de boutiques e-commerce, et les prestations liées à l'automatisation et l'intelligence artificielle. Chaque prestation fait l’objet d’un descriptif mentionnant ses caractéristiques essentielles.
        </p>
      </section>

      <section>
        <h2>Article 3 : Tarifs</h2>
        <p>
          Les prix figurant sur le site sont des prix en Euros (€). Le Prestataire se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant sur le site le jour de la commande sera le seul applicable au client. Pour les prestations sur devis, le tarif est celui indiqué sur le devis accepté par le client.
        </p>
      </section>

      <section>
        <h2>Article 4 : Commandes et Modalités de Paiement</h2>
        <p>
          La commande est réputée ferme et définitive à réception du devis signé par le client avec la mention "Bon pour accord" ou après confirmation écrite via un canal de communication direct (ex: WhatsApp, email). Un acompte peut être demandé avant le début de toute prestation. Le solde est dû à la livraison de la prestation. Le paiement s'effectue par les moyens convenus entre les parties.
        </p>
      </section>

      <section>
        <h2>Article 5 : Obligations du Prestataire</h2>
        <p>
          Le Prestataire s'engage à fournir les services avec diligence et professionnalisme, dans le respect des délais convenus avec le client, sauf cas de force majeure. Le Prestataire est tenu à une obligation de moyens et non de résultat.
        </p>
      </section>
      
      <section>
        <h2>Article 6 : Obligations du Client</h2>
        <p>
          Le client s'engage à fournir toutes les informations et éléments nécessaires à la bonne exécution des prestations (textes, images, accès, etc.). Le client garantit être titulaire des droits de propriété intellectuelle sur tous les éléments fournis.
        </p>
      </section>

      <section>
        <h2>Article 7 : Propriété Intellectuelle</h2>
        <p>
          Tous les éléments du site amadigiconseils.com sont et restent la propriété intellectuelle et exclusive du Prestataire. Personne n’est autorisé à reproduire, exploiter, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site.
        </p>
        <p>
          Concernant les projets réalisés pour le client, le client devient propriétaire des droits d'utilisation des livrables finaux après paiement intégral des factures. Le Prestataire se réserve le droit de mentionner les réalisations effectuées pour le client à des fins de promotion de son activité.
        </p>
      </section>

       <section>
        <h2>Article 8 : Projets de Démonstration ("Practice Projects")</h2>
        <p>
          Le portfolio et certaines démonstrations présentées sur ce site peuvent inclure des projets de pratique ("practice projects"). Ces projets sont réalisés par nos développeurs à des fins d'entraînement, d'expérimentation et de démonstration de savoir-faire. Ils sont entièrement codés par nos soins, en s'inspirant de designs publics ou en utilisant des images libres de droits, et ne sont pas des commandes de clients réels ni des applications en production.
        </p>
      </section>

      <section>
        <h2>Article 9 : Droit de Rétractation</h2>
        <p>
          Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation, ainsi que pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel.
        </p>
      </section>

      <section>
        <h2>Article 10 : Droit Applicable et Litiges</h2>
        <p>
          Les présentes conditions de vente en ligne sont soumises à la loi française. En cas de litige, compétence est attribuée aux tribunaux compétents de [Ville de votre tribunal], nonobstant pluralité de défendeurs ou appel en garantie.
        </p>
      </section>
    </>
  );
}