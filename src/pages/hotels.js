import React from 'react';
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import HeroAnim from '../assets/images/hotels-anim.png';

const ProgramPage = () => {
  const {t} = useTranslation();
  return (
  <Layout activeLink="hotels">
    <section className="page-section">
    <div className="hero-container">
        <div className="hero">
          <img alt="Barcelona Landscape" className="hero-anim" src={HeroAnim}/>
        </div>
      </div>
      
    </section>

    <section className="page-section">
      <div className="container hotels-container">
        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
            <StaticImage 
              className="hotel-logo"
              src="../assets/images/w-hotel-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('W Hotel')}</h3>
            <p><strong>Dirección:</strong> Plaça Rosa Del Vents 1, Final, Pg. de Joan de Borbó, 08039 Barcelona</p>
            <p><strong>{t('Teléfono:')}</strong>{t(' 932 95 28 00')}</p>
            <p>{t('Distancia hasta el evento: 0 Kms')}</p>
            <p><strong>{t('Precio:')}</strong>{t('')}</p>
            <p>{t('Descuento del 15% + Desayuno gratuito sobre tarifa web')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p><strong>{t('Cómo reservar:')}</strong></p>
            <p>
              {t('Realización de la reserva a través de la web del hotel introduciendo el ')}
              <strong>{t('código de descuento: 2GS ')}</strong>
              {t('en el momento de realizar la reserva. Código promocional válido las noches de 6 y 7 de Octubre.')}
              <p className="pt-2">{t('¿Cómo reservar utilizando el código descuento?')}</p>
              {t('Acceder a la web del ')}
              <a referrerPolicy='no-referrer' href="https://www.espanol.marriott.com/hotels/travel/bcnwh-w-barcelona/?scid=d5e1b25e-2049-49ae-9bd5-2a7bdde45b71&gclid=EAIaIQobChMIltzQ79eW-QIVB-7tCh3_HwPjEAAYASAAEgKTwvD_BwE&gclsrc=aw.ds">W Barcelona</a>
              {t(', clicar sobre “ver tarifas” situado en la parte superior derecha de la home. Finalmente, cuando aparece la ventana emergente para hacer la reserva, desplegar el apartado “tarifas especiales” y seleccionar la opción “Corporativo/Promoción/Nº SET”')}
            </p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/w-barcelona-hotel?share">Cómo llegar</a>
            
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              className="hotel-logo"
              src="../assets/images/h10-hotel-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('H10 Marina')}</h3>
            <p><strong>{t('Dirección:')}</strong>{t(' Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona')}</p>
            <p><strong>{t('Teléfono:')}</strong>{t(' 933 09 79 17')}</p>
            <p>{t('Distancia hasta el evento: 3,2 kms')}</p>
            <p><strong>{t('Precio:')}</strong>{t('')}</p>
              <p>{t('135€ (IVA incluido) por habitación y noche')}</p>
              <p>{t('Incluye habitación superior, desayuno y acceso a spa')}</p>
              <p>{t('Acuerdo corporate iad')}</p>
              <p>{t('Tasa turística no incluida')}</p>
              <p><strong>{t('Cómo reservar:')}</strong></p>
              <p>{t('Para realizar reserva, es necesario escribir un email a h10.marina.barcelona@h10hotels.com e indicar que se trata de una reserva del ')}<strong>{t('acuerdo corporate iad')}</strong></p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="h10.marina.barcelona"
              data-domain="h10hotels.com"
              data-subject="Reserva – acuerdo corporate iad"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              className="hotel-logo"
              src="../assets/images/exe-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Exe Cristal Palace')}</h3>
            <p><strong>{t('Dirección:')}</strong>{t(' Carrer de la Diputació, 257, 08007 Barcelona')}</p>
            <p><strong>{t('Teléfono:')}</strong>{t(' 933 93 09 70')}</p>
            <p>{t('Distancia hasta el evento: 3,8 kms')}</p>
            <p><strong>{t('Precio:')}</strong>{t('')}</p>
            <p>{t('DUI: 153€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('DOB: 162€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('Incluye desayuno')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p><strong>{t('Cómo reservar:')}</strong></p>
            <p>{t('Para realizar reserva, es necesario escribir un email a reservas@execristalpalace.com e indicar que se trata de una reserva en referencia a la')}<strong>{t(' Convención Nacional iad')}</strong></p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-cristal-palace?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="reservas"
              data-domain="execristalpalace.com"
              data-subject="Reserva- Convención Nacional iad"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row">
          <div className="col-12 col-md-2">
          <StaticImage 
              className="hotel-logo"
              src="../assets/images/exe-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
              />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Exe Plaza')}</h3>
            <p><strong>{t('Dirección:')}</strong>{t(' Ronda de la Universitat, 18, 08007 Barcelona')}</p>
            <p><strong>{t('Teléfono:')}</strong>{t(' 932 40 84 19')}</p>
            <p>{t('Distancia hasta el evento: 3,5 kms')}</p>
            <p><strong>{t('Precio:')}</strong>{t('')}</p>
            <p>{t('DUI: 177€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('DOB: 185€ (IVA incluido) por habitación y noche')}</p>
            <p>{t('Incluye desayuno')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p><strong>{t('Cómo reservar:')}</strong></p>
            <p>{t('Para realizar reserva, es necesario escribir un email a info@exeplazacatalunya.com e indicar que se trata de una reserva en referencia a la')}<strong>{t(' Convención Nacional iad')}</strong></p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-plaza-catalunya?share">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="info"
              data-domain="exeplazacatalunya.com"
              data-subject="Convención Nacional iad"
              >{t('Reservar')}
            </a>
          </div>
        </div>

        <div className="row hotels-list-row mb-5">
          <div className="col-12 col-md-2">
            <StaticImage 
              className="hotel-logo"
              src="../assets/images/kk-hotels-logo.png"
              alt="Hotel W"
              with="186"
              height="186"
            />
          </div>
          <div className="col-12 col-md-7">
            <h3 className="hotels--title">{t('Hotel KK')}</h3>
            <p><strong>{t('Dirección:')}</strong>{t(' Passeig de Picasso, 26, 30, 08003 Barcelona')}</p>
            <p><strong>{t('Teléfono:')}</strong>{t(' 935 47 86 00')}</p>
            <p>{t('Distancia hasta el evento: 2,4 kms')}</p>
            <p><strong>{t('Precio:')}</strong>{t('')}</p>
            <p>{t('197,64€ (IVA incluido) por habitación y noche (del 7 al 9 de octubre)')}</p>
            <p>{t('Incluye habitación Cosy Urban')}</p>
            <p>{t('Tasa turística y desayuno no incluidos')}</p>
            <p><strong>{t('Cómo reservar:')}</strong></p>
            <p>{t('Para realizar reserva, es necesario escribir un email a reservations.picasso@kkhotels.com e indicar la referencia ')}<strong>{t('IAD-CN22')}</strong></p>
          </div>
        
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://goo.gl/maps/3xF9L3sHBK1h1MXA8">Cómo llegar</a>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="reservations.picasso"
              data-domain="kkhotels.com"
              data-subject={`IAD-CN22`}
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