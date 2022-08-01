import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Hero from "../assets/video/hero.mp4";

import intro from '../assets/images/intro.jpg';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        
        <div className="col-3">
        
        </div>
        <video width="320" height="240" preload="auto" autoPlay muted>
          <source src={Hero} type="video/mp4"/>
          {t('Su navegador no puede reproducir el video')}
        </video>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
       
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