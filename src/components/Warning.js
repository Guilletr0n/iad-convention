import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Warning = () => {

  const {t} = useTranslation();
  return (
    <div className="warning">
      <h5 className="warning__title">
        {t('¿Tienes alguna alergia y/o intolerancia alimenticia?')}
        <a 
          href="#mailgo"
          data-address="eventos"
          data-domain="iadgroup.es"
          > eventos@iadgroup.es
        </a>
        
      </h5>
    </div>
  );
}

export default Warning;

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