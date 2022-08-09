import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="location">
    <section className="page-section">
      <div className="hero-container">
        
          <div className="hero">
            <StaticImage 
              src="../assets/images/location-hero.jpg"
              alt="location hero"
              width={1920}
              height={500}
              placeholder="blurred"
              objectFit="cover"
            />
          </div>
      </div>
      
    </section>

    <section className="page-section location-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <p className="orange-title">Plaça Rosa Del Vents 1, Final, Pg. de Joan de Borbó, 08039 Barcelona</p>
            <p className="body__text order-1">
              {t('La Convención Nacional de iad España tendrá lugar en el Hotel W de Barcelona. El hotel W Barcelona se encuentra en primera línea de playa de la capital catalana, al lado del paseo marítimo. La forma de vela del hotel W Barcelona, diseñado por Ricardo Bofill, es una seña de identidad de la capital catalana. Consta de 473 habitaciones y suites y ofrece excelentes panorámicas a la ciudad y gracias a los ventanales que conforman todo el edificio.')}
            </p>
            <p className="body__text order-3">{t('Recomendamos el desplazamiento en taxi o en cualquier otro tipo de servicio o transporte público.')}</p>
            <p className="body__text order-4">{t('El coste del parking durante el evento corre a cargo de los asistentes.')}</p>
          </div>
          <div className="col-12 offset-md-1 col-md-6 order-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.259749537602!2d2.187964715655394!3d41.36844100513206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b185625025%3A0x59e80c780f7e2f0b!2sW%20Barcelona!5e0!3m2!1ses!2ses!4v1659886270219!5m2!1ses!2ses"
              width="100%" height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{border: 0, minHeight: 500}}
              ></iframe>
          </div>
        </div>
      </div>
    </section>

   
  </Layout>
)};

export default ProgramPage;

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