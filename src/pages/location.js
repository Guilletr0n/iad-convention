import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import HeroAnim  from '../assets/images/location-anim.png';

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="location">
    <section className="page-section">
      <div className="hero-container">
        <div className="hero">
        <img alt="Barcelona Landscape" className="hero-anim" src={HeroAnim}/>
        </div>
      </div>
      
    </section>

    <section className="page-section location-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <p className="orange-title">Plaça Rosa Del Vents 1, Final, Pg. de Joan de Borbó, 08039 Barcelona</p>
            <p className="body__text">
              {t('La Convención Nacional de iad España tendrá lugar')}
            </p>
            <p>{t('El Hotel W cuenta con más de 450 habitaciones y suites')}</p>
            <p>{t('Ubicado a primera línea de playa')}</p>
            <p className="body__text">{t('Recomendamos el desplazamiento en taxi')}</p>
          </div>
          <div className="col-12 offset-md-1 col-md-6">
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