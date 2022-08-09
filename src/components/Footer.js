import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {

  const {t} = useTranslation();
  return (
    <footer className="footer text-faded py-5">
      <div className="container">
        
        <div className="row">
          <div className="col-md-2">
            <StaticImage 
              src="../assets/images/footer-logo.png"
              placeholder="none"
              alt="logo"
              width={140}
              height={152}
            />
          </div>
          <div className="col-md-10">
            <p className="footer__text">
              {t('La ')}
              <strong>{t('Convención Nacional de 2022')}</strong>
              {t(' es uno de los eventos más importantes de la red iad. Un momento de reencuentro y de celebración de los éxitos cosechados. Este año se celebrará en el')}
              <strong>{t(' Hotel W')}</strong>
              {t(' de Barcelona y es exclusivamente para los miembros del Grupo')}
              <strong>{t(' iad')}</strong>
            </p>
          </div>
        </div>
        <div className="row text-center">  
          <div className="col-12">
            <p className="m-0">
              <a href="/legal" alt="aviso legal">
                {t('Aviso Legal')}
              </a>
                <Link
                  className=""
                  to="/aviso-legal"
                ></Link>
                <Link
                  className=""
                  to="/politica-cookies"
                >{t('Política de Cookies')}</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

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