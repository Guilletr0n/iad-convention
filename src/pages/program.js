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
          <div className="row">
            <div className="col-12 mb-3">
              <h2>{t('Programa')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="body-text">
                {t('La Convención Nacional de iad España tendrá lugar en el Hotel W de Barcelona. El hotel W Barcelona se encuentra en primera línea de playa de la capital catalana, al lado del paseo marítimo. La forma de vela del hotel W Barcelona, diseñado por Ricardo Bofill, es una seña de identidad de la capital catalana. Consta de 473 habitaciones y suites y ofrece excelentes panorámicas a la ciudad y gracias a los ventanales que conforman todo el edificio. Dirección: Plaça Rosa Del Vents 1, Final, Passeig de Joan de Borbó, 08039 Barcelona. Recomendamos el desplazamiento en taxi o en cualquier otro tipo de servicio o transporte público. El coste del parking durante el evento corre a cargo de los asistentes.')}
              </p>
            </div>
          </div>
          <div className="row program_blocks--grid mt-5">
            <div className="col-6 offset-md-1 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('16:30h')}</span>
              <span className="program_blocks__item__description">{t('Acreditación y Welcome')}</span>
            </div>
            <div className="col-6 col-md-2 program_blocks__item">
              <span className="program_blocks__item__time">{t('17:30h')}</span>
              <span className="program_blocks__item__description">{t('Aperitivo')}</span>
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
          <div class="slider-container mt-5">
            <div className="program_blocks--slider mt-5">
              <div className="program_blocks__item">
                <span className="program_blocks__item__time">{t('16:30h')}</span>
                <span className="program_blocks__item__description">{t('Acreditación y Welcome')}</span>
              </div>
              <div className="program_blocks__item">
                <span className="program_blocks__item__time">{t('17:30h')}</span>
                <span className="program_blocks__item__description">{t('Aperitivo')}</span>
              </div>
              <div className="program_blocks__item">
                <span className="program_blocks__item__time">{t('20:00h')}</span>
                <span className="program_blocks__item__description">{t('Aperitivo')}</span>
              </div>
              <div className="program_blocks__item">
                <span className="program_blocks__item__time">{t('21:00h')}</span>
                <span className="program_blocks__item__description">{t('Cena')}</span>
              </div>
              <div className="program_blocks__item">
                <span className="program_blocks__item__time">{t('03:00h')}</span>
                <span className="program_blocks__item__description">{t('Cierre de la Convención Nacional')}</span>
              </div>
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