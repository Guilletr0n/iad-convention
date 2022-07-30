import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import intro from '../assets/images/intro.jpg';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        {t('This is english')}
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
       
      </div>
    </section>
  </Layout>
  )
  };

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