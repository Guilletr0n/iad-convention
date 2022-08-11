import React from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout noFooter>
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">{t('Página no encontrada')}</span>
                <span className="section-heading-lower">{t('La URL no es válida')}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)};

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
