import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Hero from "../assets/video/hero.mp4";
import HeroPic from "../assets/images/visual_personaje.png";


const IndexPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="home">
    <section className="page-section clearfix home-video-section">
      <video className="hero-video" width="100%" height="auto" preload="auto" autoplay muted loop playsinline >
        <source src={Hero} type="video/mp4"/>
        {t('Su navegador no puede reproducir el video')}
      </video>
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