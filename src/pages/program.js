import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
    <Layout activeLink="program">
      <section className="page-section program-page">
        <div className="container">
          <div class="row">
            <h2 className="orange-title text-center">
              {t('7 de Octubre 2022')}
            </h2>
          </div>
          <div className="row program_blocks--grid mt-5">
            <div className="col-6 offset-md-1 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('16:30h')}</span>
              <span className="program_blocks__item__description">{t('Acreditación y Welcome')}</span>
            </div>
            <div className="col-6 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('17:30h')}</span>
              <span className="program_blocks__item__description">{t('Inicio convencion nacional')}</span>
            </div>
            <div className="col-6 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('20:00h')}</span>
              <span className="program_blocks__item__description">{t('Aperitivo')}</span>
            </div>
            <div className="col-6 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('21:00h')}</span>
              <span className="program_blocks__item__description">{t('Cena')}</span>
            </div>
            <div className="col-6 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('03:00h')}</span>
              <span className="program_blocks__item__description">{t('Cierre de la Convención Nacional')}</span>
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