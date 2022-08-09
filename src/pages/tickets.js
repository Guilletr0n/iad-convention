import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const RegistrationPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="tickets">
    <section className="page-section page-tickets">
      <div className="container">
        <div className="row">
          <div class="hero__text">
            <h1 className="text-center">{t('Accede a Weezevent desde aquí para comprar tu entrada')}</h1>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto">
            <a href="https://my.weezevent.com/convencion-nacional22-iad-espana"
              className="btn btn--ticket"
              referrerpolicy="no-referrer"
              target="_blank">
              {t('Comprar')}
            </a>
          </div>
        </div>
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