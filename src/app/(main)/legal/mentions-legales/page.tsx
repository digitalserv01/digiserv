
import Link from 'next/link';

export default function MentionsLegalesPage() {
  const email = "nexusai.maroc@outlook.com";

  return (
    <>
      <header>
        <h1>Mentions Légales</h1>
      </header>
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site amadigiconseils.com est édité par un entrepreneur individuel agissant en son nom propre.
        </p>
        <ul>
          <li><strong>Directeur de la publication :</strong> AMADI DIGICONSEILS</li>
          <li><strong>Contact e-mail :</strong> <a href={`mailto:${email}`}>{email}</a></li>
          <li><strong>Contact téléphonique :</strong> +212 699 020 158</li>
        </ul>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Firebase Hosting (Google), dont le siège social est situé à Gordon House, Barrow Street, Dublin 4, Irlande.
        </p>
      </section>

      <section>
        <h2>Propriété Intellectuelle</h2>
        <p>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
        </p>
      </section>
      
       <section>
        <h2>Avis sur les Projets de Démonstration ("Practice Projects")</h2>
        <p>
          Certains projets et réalisations présentés dans notre portfolio sont des "practice projects". Ces projets sont créés par nos développeurs à des fins de formation, d'expérimentation et pour démontrer notre savoir-faire.
        </p>
        <ul>
            <li>Ils sont codés intégralement par nos équipes, en s'inspirant de designs et de concepts publics.</li>
            <li>Les images ou médias utilisés sont soit issus de banques d'images libres de droits (ex: Unsplash), soit des créations originales, soit utilisés à titre illustratif d'inspiration.</li>
            <li>Ces projets ne sont pas des commandes de clients réels et ne sont pas déployés en environnement de production.</li>
        </ul>
      </section>
      
      <section>
        <h2>Demande de Retrait de Contenu</h2>
        <p>
          Si vous êtes le propriétaire des droits d'auteur d'un contenu (image, logo, etc.) utilisé par inadvertance dans l'un de nos projets de démonstration et que vous souhaitez son retrait, nous vous prions de nous contacter.
        </p>
        <p>
          Veuillez envoyer votre demande à l'adresse e-mail affichée dans le pied de page de notre site (<a href={`mailto:${email}`}>{email}</a>) en précisant l'URL de la page concernée et le contenu en question. Nous nous engageons à traiter votre demande et à retirer le contenu dans les plus brefs délais.
        </p>
      </section>

      <section>
        <h2>Limitation de responsabilité</h2>
        <p>
          AmadiDigiConseils s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, AmadiDigiConseils ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
        </p>
      </section>
    </>
  );
}
