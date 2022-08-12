import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {

  const {t} = useTranslation();
  return (
    <footer className="footer text-faded">
      <div className="container">
        
        <div className="row">
          <div className="col-12 col-md-2 footer-logo">
            <StaticImage
              src="../assets/images/footer-logo.png"
              placeholder="none"
              alt="logo"
              width={140}
              height={152}
            />
          </div>
          <div className="col-12 col-md-10">
            <p className="footer__text">
              {t('La')}
              <strong> {t('Convención Nacional')} </strong>
              {t('es uno de los eventos más importantes de la red iad. Un momento de reencuentro y de celebración de los éxitos cosechados. Este año se celebrará en el')}
              <strong> {t('Hotel W')} </strong>
              {t('de Barcelona y será una cita exclusiva para los miembros del')}
              <strong> {t('Grupo iad')}.</strong>
            </p>
          </div>
        </div>
        <div className="row text-center mt-5">  
          <div className="col-12">
            <div className="footer-links m-0">
              <Link
                className=""
                to="/aviso-legal"
              >
                {t('Aviso Legal')}
              </Link>
              <span className='share-label'>{t('Compartir')}:</span>
              <Link
                className=""
                to="https://twitter.com/intent/tweet?text=https://www.convencioniadespana.com/"
              >
                <StaticImage
                  src="../assets/icons/icon-twitter.svg"
                  placeholder="none"
                  alt="twitter"
                  width={35}
                  height={30}
                />
              </Link>
              <Link
                className=""
                to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.convencioniadespana.com%2F&amp;src=sdkpreparse"
              >
                <StaticImage
                  src="../assets/icons/icon-facebook.svg"
                  placeholder="none"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                className=""
                to="https://www.linkedin.com/cws/share?url={www.convencioniadespana.com}"
              >
                <StaticImage
                  src="../assets/icons/icon-linkedin.svg"
                  placeholder="none"
                  alt="linkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
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