import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const LegalPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <section className="page-section">
      <div className="container">
        <div className="row">
          <h1 className="mb-5">{t('AVISO LEGAL')}</h1>
          <p>{t('La página Web www.iadinternational.com (la «Web») es una página web editada por la sociedad I@D International, sociedad por acciones simplificada inscrita en el Registro Mercantil de Melun bajo el n° 820 923 126, con un capital social de 20 583 019,80 €, con sede social sita en 1 Allée de la Ferme de Varâtre, Immeuble Carré Haussmann III, 77127 LIEUSAINT.')}</p>
          <p>{t('Teléfono: 01 64 43 49 50. Dirección de Email: communication@iadfrance.fr.')}</p>
          <p>{t('El director de la publicación de la Web es Roland Tripard')}</p>
          <p>{t('La sociedad que realiza el alojamiento es la sociedad WP Engine Inc, dont le siège est situé 504 Lavaca, Suite 1000, Austin, TX 78701 – United States')}</p>
          <p>{t('Contenido escrito:La Web propone, a modo documental, diferentes textos que se pueden utilizar con discernimiento, cuando convenga. ')}</p>
          <p>{t('Enlaces hipertexto: La Web ofrece enlaces hipertexto hacia diferentes páginas web de terceros. El editor no será en ningún caso responsable debido a la activación de estos enlaces por el internauta, en particular el editor declina cualquier responsabilidad relativa al contenido de estas páginas web. I@D International no será en ningún caso responsable en caso de litigio entre una web indexada y un usuario, y no soportará ninguna responsabilidad relativa al contenido, los productos y los servicios disponibles en estas páginas web de terceros o a partir de estas páginas web, así como sus accesos y correcto funcionamiento técnico.')}</p>
          <p>{t('La implantación de un enlace hipertexto hacia la Web requiere una autorización previa por escrito de I@D International. ')}</p>
          <p>{t('Copyright: La página Web y todas las creaciones presentes en ella, incluido en particular las marcas, logotipos, cartas gráficas, así como todos los datos (textos e imágenes), están protegidos por el derecho de propiedad intelectual y son propiedad exclusiva de I@D International. El uso, la reproducción, la imitación, la explotación, a título gratuito u oneroso, ya sea en parte o en totalidad, cualquiera que sea el soporte o proceso, están prohibidos. Cualquier incumplimiento de esta prohibición representa una falsificación susceptible de comprometer la responsabilidad civil y penal del falsificador. ')}</p>
          <p>{t('Acceso a la Web: I@D International hace todo lo posible para que la Web esté accesible las 24h y 7 días/semana. Sin embargo, I@D France no será responsable en caso de imposibilidad momentánea de utilizar la Web en caso, en particular, de fuerza mayor, problemas informáticos, problemas relacionados con las redes de telecomunicaciones, problemas técnicos, problemas relacionados con la red eléctrica. Por motivos de mantenimiento, I@D International podrá suspender y/o interrumpir el acceso a la Web. ')}</p>
          <p>{t('Crédito fotos: iad france')}</p>
        </div>
        </div>
      </section>
    </Layout>
  )
}

export default LegalPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;









