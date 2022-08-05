import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Hero from "../assets/video/hero.mp4";


const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="home">
    <section className="page-section clearfix hero-section">
      <div className="container">
        <div className="row">
          <video className="hero-video" width="100%" height="auto" preload="auto" autoPlay muted loop>
            <source src={Hero} type="video/mp4"/>
            {t('Su navegador no puede reproducir el video')}
          </video>
        </div>
        <div className="row">
        <p className="hero__text">
          {t('La Convención Nacional de 2022 es uno de los eventos más importantes de la red iad. Un momento de reencuentro y de celebración de los éxitos cosechados. Este año se celebrará en el Hotel W de Barcelona y es exclusivamente para los miembros del Grupo iad.')}
        </p>
      </div>
      </div>
    </section>
    
  </Layout>
  )
  };

export default IndexPage;

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