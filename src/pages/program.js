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
          <p>
            {t('La Convención Nacional de 2022 es uno de los eventos más importantes de la red iad. Un momento de reencuentro y de celebración de los éxitos cosechados. Este año se celebrará en el Hotel W de Barcelona y es exclusivamente para los miembros del Grupo iad.')}
          </p>
          <p>
            {t('La Convención Nacional de iad España tendrá lugar en el Hotel W de Barcelona. El hotel W Barcelona se encuentra en primera línea de playa de la capital catalana, al lado del paseo marítimo. La forma de vela del hotel W Barcelona, diseñado por Ricardo Bofill, es una seña de identidad de la capital catalana. Consta de 473 habitaciones y suites y ofrece excelentes panorámicas a la ciudad y gracias a los ventanales que conforman todo el edificio. Dirección: Plaça Rosa Del Vents 1, Final, Passeig de Joan de Borbó, 08039 Barcelona. Recomendamos el desplazamiento en taxi o en cualquier otro tipo de servicio o transporte público. El coste del parking durante el evento corre a cargo de los asistentes.')}
          </p>
          <div className="program_blocks">
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