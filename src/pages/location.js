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
          />
          <h2 className="hero__title">{t('Localización')}</h2>
        </div>
      </div>
      
    </section>

    <section className="page-section">
      <div className="container">
        
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