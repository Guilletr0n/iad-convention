import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
    <Layout activeLink="program">
      <section className="page-section">
        <div className="container">
        
        <h2>{t('Program')}</h2>
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