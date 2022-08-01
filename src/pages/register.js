import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const RegistrationPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="register">
    <section className="page-section">
      <div className="container">
        {t('Register')}
      </div>
    </section>
  </Layout>
)};

export default RegistrationPage;

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