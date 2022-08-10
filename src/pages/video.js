import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Hero from "../assets/video/hero.mp4";

const Video = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <section className="page-section">
        
          <div className="video-wrap">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: '100%',
                width: '100%',
                zIndex: '-1',
                objectFit: 'fill',
                objectPosition: 'center'
              }}
              src={Hero}
              preload="auto">
                <source src={Hero} type="video/mp4"/>
                {t('Su navegador no puede reproducir el video')}
            </video>
          </div>
          
      </section>
    </Layout>
  )
}

export default Video;

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









