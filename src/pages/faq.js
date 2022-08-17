import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const LegalPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <section className="page-section faq-page">
      <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-3">{t('Preguntas Frecuentes')}</h1>
          <ul>
            <li>¿Puedo venir con un acompañante?</li>
            <p>No, no se admiten acompañantes. Los eventos de iad son exclusivamente para miembros del Grupo iad.</p>
            <li>¿Hay algún convenio con hoteles o sugerencias de alojamiento?</li>
            <p>Sí, puedes consultar todas las posibilidades aquí.</p>
            <li>¿Puedo comprar entradas a mis ahijados o a mi equipo?</li>
            <p>Sí es posible en la página de compra de tus entradas. Una vez hayas iniciado el proceso de compra de tus entradas, introduce los datos de tu ahijado en "Datos del asistente" y pon tus datos en "Datos comprador". De esta forma, tú serás la persona que haga el pago y la compra, pero las entradas irán al nombre de tu ahijado. </p>
            <li>¿La entrada es reembolsable?</li>
            <p>Las entradas adquiridas para el evento, no serán reembolsadas sin causa mayor justificada.</p>
            <li>¿Tienes más preguntas?</li>
            <p>Contacta con eventos@iadgroup.es y aclararemos tus dudas.</p>
          </ul>
        </div>
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









