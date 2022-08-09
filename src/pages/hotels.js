import React from 'react';
import { graphql } from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import { heroAnim } from '../assets/images/hotels-anim.png';

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="hotels">
    <section className="page-section">
    <div className="hero-container">
        <div className="hero">
          <StaticImage 
            src="../assets/images/hotels-hero.jpg"
            alt="hotels"
            width={1920}
            height={500}
          />
        </div>
      </div>
      
    </section>

    <section className="page-section">
      <div className="container hotels-container">
        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
            <StaticImage 
              src="../assets/images/w-hotel-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('W Hotel')}</h3>
            <p>Dirección: Plaça Rosa Del Vents 1, Final, Pg. de Joan de Borbó, 08039 Barcelona</p>
            <p>{t('Teléfono: 932 95 28 00')}</p>
            <p>{t('Distancia hasta el evento: 0 Kms')}</p>
            <p>{t('Precio: 15% de descuento sobre tarifa web')}</p>
            <p>{t('Incluye desayuno')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario acceder a la web del hotel, y para las noches del 6 y 7 de Octubre se ha habilitado un código de descuento: 2GS que hay que escribir en el apartado: Ver Tarifas / Tarifas especiales / Corporativo-Promoción-nºSET')}</p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/w-barcelona-hotel?share">Cómo llegar</a>
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              src="../assets/images/h10-hotel-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('H10 Marina')}</h3>
            <p>{t('Dirección: Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona')}</p>
            <p>{t('Teléfono: 933 09 79 17')}</p>
            <p>{t('Distancia hasta el evento: 3,2 kms')}</p>
            <p>{t('Precios:')}</p>
              <p>{t('135€ (IVA incluido) por habitación y noche')}</p>
              <p>{t('Incluye habitación superior, desayuno y acceso a spa')}</p>
              <p>{t('El acuerdo incluye')}</p>
              <p>{t('Tasa turística no incluida')}</p>
              <p>{t('Para realizar reserva, es necesario escribir un email a h10.marina.barcelona@h10hotels.com e indicar que se trata de una reserva del acuerdo corporate iad.')}</p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="h10.marina.barcelona"
              data-domain="h10hotels.com"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              src="../assets/images/exe-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Exe Cristal Palace')}</h3>
            <p>{t('Dirección: Carrer de la Diputació, 257, 08007 Barcelona')}</p>
            <p>{t('Teléfono: 933 93 09 70')}</p>
            <p>{t('Distancia hasta el evento: 3,8 kms')}</p>
            <p>{t('Precio: DUI: 153€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('DOB: 162€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('Incluye desayuno')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario escribir un email a reservas@execristalpalace.com e indicar que se trata de una reserva en referencia a la CONVENCIÓN NACIONAL IAD')}</p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-cristal-palace?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="reservas"
              data-domain="execristalpalace.com"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              src="../assets/images/exe-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Exe Plaza')}</h3>
            <p>{t('Dirección: Ronda de la Universitat, 18, 08007 Barcelona')}</p>
            <p>{t('Teléfono: 932 40 84 19')}</p>
            <p>{t('Distancia hasta el evento: 3,5 kms')}</p>
            <p>{t('Precio: DUI: 177€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('DOB: 185€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('Incluye desayuno')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario escribir un email a info@exeplazacatalunya.com e indicar que se trata de una reserva en referencia a la CONVENCIÓN NACIONAL IAD')}</p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-plaza-catalunya?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="info"
              data-domain="exeplazacatalunya.com"
              data-subject="CONVENCIÓN NACIONAL IAD"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row mb-5">
          <div className="col-12 col-md-2">
            <StaticImage 
              src="../assets/images/kk-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
            />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Hotel KK')}</h3>
            <p>{t('Dirección: Passeig de Picasso, 26, 30, 08003 Barcelona')}</p>
            <p>{t('Teléfono: 935 47 86 00')}</p>
            <p>{t('Distancia hasta el evento: 2,4 kms')}</p>
            <p>{t('Precio: 197,64€ (IVA incluido) por habitación y noche (del 7 al 9 de octubre)')}</p>
            <p>{t('Incluye habitación Cosy Urban')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario escribir un email a reservations.picasso@kkhotels.com e indicar la referencia IAD-CN22')}</p>
          </div>
        
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://goo.gl/maps/3xF9L3sHBK1h1MXA8">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="reservations.picasso"
              data-domain="kkhotels.com"
              data-subject="IAD-CN22 "
              >{t('Reservar')}
            </a>
          </div>
        </div>
        
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