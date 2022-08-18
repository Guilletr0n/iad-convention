import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Hero from "../assets/video/hero.mp4";

const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="home">
    <div className="video-wrap">
      <video id="heroVideo" className="hero-video" preload="auto" autoPlay muted loop playsInline >
        <source src={Hero} type="video/mp4"/>
        {t('Su navegador no puede reproducir el video')}
      </video>
    </div>
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