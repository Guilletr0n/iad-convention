import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const LegalPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <section className="page-section">
        <div class="container">
          <h1>{t('Política de Cookies')}</h1>
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









