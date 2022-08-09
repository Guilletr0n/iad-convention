import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const LegalPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <section className="page-section legal-page">
      <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-3">{t('Aviso legal')}</h1>
          <p>{t('Iad España inmobiliaria a Domicilio .SL. (en adelante "EL TITULAR") insta al usuario de este sitio web (en adelante "EL USUARIO") a que lea los aspectos legales que a continuación se exponen. El hecho de navegar por este sitio web implica su conocimiento y aceptación por parte del USUARIO. De acuerdo con la Ley Orgánica 15/1999 de 13 de diciembre sobre Protección de Datos de Carácter Personal (LOPD), la Ley 34/2002 de 11 de julio sobre Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE) y el Real Decreto Legislativo 1/1996 de 12 de abril por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, el titular informa al USUARIO de los siguientes aspectos legales:')}</p>
          <h3>{t('Propiedad Intelectual')}</h3>
          <p>{t('La página www.convencioniadespana.com es un servicio publicado por la red iad España, filial de iad International. iad International SA con número de registro 820 923 126 RCS Melun, cuya sede se ubica en Allée de la Ferme de Varâtre – Immeuble Carré Haussmann III – 77127 Lieusaint, Francia')}</p>
          
          <h3>{t('Ley de protección de datos')}</h3>
          <p>{t('En cumplimiento de la Ley 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, todos los datos que se reciban a través de la página www.convencioniadespana.com, serán incluidos en un fichero titularidad de iad España inmobiliaria a Domicilio .SL para su tratamiento con la finalidad de mantener, gestionar y desarrollar la relación con el USUARIO o por parte de iad España y sus representantes')}</p>
          
          <p>{t('En relación con los datos de carácter personal a los que EL TITULAR acceda, se obliga a')}</p>
          <ul>
            <li>{t('Tratarlos únicamente conforme a las instrucciones del USUARIO')}</li>
            <li>{t('No comunicarlos a terceros, ni tan siquiera para su conservación;')}</li>
            <li>{t('Implementar las medidas de seguridad exigibles conforme a la normativa sobre los sistemas y ficheros en los que se integran para garantizar su confidencialidad y evitar su pérdida o el acceso no autorizado.')}</li>
          </ul>
          <p>{t('EL USUARIO podrá ejercitar los derechos de acceso, rectificación o cancelación de datos, así como el derecho de revocar el consentimiento prestado para la cesión de sus datos mediante comunicación escrita con la sociedad a la siguiente dirección de correo: contact@iadespana.es')}</p>
          
          <h3>{t('Copyright')}</h3>
          <p>{t('Copyright La marca, el logotipo, el documento gráfico, así como todos los datos (textos e imágenes) que aparecen en las páginas del sitio www.convencioniadespana.com son propiedad exclusiva de EL TITULAR: el uso, la reproducción, la imitación, explotación, gratuita o costosa, en parte o en su totalidad, en cualquier medio o por cualquier proceso está prohibida. Esta prohibición constituye una infracción susceptible de comprometer la responsabilidad civil y penal del falsificador.')}</p>
          
          <h3>{t('Enlaces de hipertexto')}</h3>
          <p>{t('El sitio ofrece enlaces de hipertexto a sitios de terceros. EL TITULAR no se hace responsable del contenido, productos y servicios disponibles en estos sitios o desde estos sitios, ni, así como del estado de su acceso o correcto funcionamiento técnico. El establecimiento de un enlace de hipertexto al sitio www.convencioniadespana.com requiere una autorización previa por escrito de EL TITULAR.')}</p>
          
          <h3>{t('Cookies')}</h3>
          <p>{t('Este sitio web utiliza cookies, que es una pequeña información almacenada en el equipo para ayudar a la web a proporcionar una mejor experiencia de USUARIO. En general, las cookies se utilizan para mantener las preferencias del USUARIO y proporcionar datos de seguimiento anónimas a aplicaciones de terceros como Google Analytics. Por norma general, las cookies harán que su experiencia de navegación sea mejor. No obstante, es posible que prefieras desactivar las cookies en este sitio y en los demás. La forma más eficaz es desactivar las cookies en el navegador.')}</p>
          
          <h3>{t('Disponibilidad del entorno')}</h3>
          <p className="mb-5">{t('Acceso al sitio El sitio es accesible 24h / 24h y 7 días / 7. Sin embargo, EL TITULAR no puede ser responsable en caso de imposibilidad momentánea de utilizar el sitio en caso de fuerza mayor, dificultades informáticas, dificultades relacionadas con redes de telecomunicaciones, dificultades técnicas o dificultades relacionadas con la red EDF. Por motivos de mantenimiento, EL TITULAR podrá interrumpir el acceso al sitio e intentará advertir a los usuarios de antemano.')}</p>
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









