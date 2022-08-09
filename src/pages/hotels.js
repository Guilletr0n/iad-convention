import React from 'react';
import { graphql } from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";

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
            <p>Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona</p>
            <p>{t('15% de descuento sobre tarifa web. Desayuno incluido. Tasa turística no incluida. Para realizar reserva es necesario acceder a la web del hotel, y para las noches del 6 y 7 de Octubre se ha habilitado un código de descuento: 2GS que hay que escribir en el apartado: Ver Tarifas / Tarifas especiales / Corporativo-Promoción-nºSET')}</p>
          </div>
          <div className="col-12 col-md-3">
            <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
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
            <p>{t('Precios:')}</p>
              <p>{t('DUI: XXX €')}</p>
              <p>{t('DOB: XXX €')}</p>
              <p>{t('El acuerdo incluye')}</p>
              <ul>
                <li>{t('Habitación superior')}</li>
                <li>{t('Desayuno')}</li>
                <li>{t('Acceso al spa')}</li>
              </ul>
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
            <p>{t('Precios:')}</p>
            <p>{t('DUI: 153 €')}</p>
            <p>{t('DOB: 162 €')}</p>
            <p>{t('Precios por habitación y noche. IVA y desayuno incluido. Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario escribir un email e indicar que se trata de una reserva del acuerdo corporate IAD.')}</p>
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
            <h3 className="hotels--title">{t('Exe Plaza')}</h3>
            <p>{t('Precios:')}</p>
              <p>{t('Dui: 177€')}</p>
              <p>{t('Doble: 185€')}</p>
              <p>{t('Precios por habitación y noche')}</p>
              <p>{t('IVA y desayuno incluido')}</p>
              <p>{t('Tasa turística no incluida')}</p>
              <p>{t('Para realizar reserva, escribir email e indicar que solicitan una habitación en referencia a la CONVENCIÓN NACIONAL IAD')}</p>
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
            <p>{t('Precios:')}</p>
              <p>{t('Dui: XXX€')}</p>
              <p>{t('Doble: XXX€')}</p>
              <p>{t('El acuerdo incluye:')}</p>
              <p>{t('Habitación Cosy Urban. (tasa turística no incluida)')}</p>
              <p>{t('Reservas deben enviar un correo e indicar la referencia IAD-CN22')}</p>
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
        
      <div className="row hotels-blocks">
          <div className="hotels-blocks__item col-6 col-md-3">
            <h3 className="hotels-blocks__item-title">{t('W Hotel')}</h3>
            <p>{t('Dirección')}</p>
            <p>Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona</p>
            <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
            <p>{t('Precios:')}</p>
            <p>{t('15% de descuento sobre tarifa web')}</p>
            <p>{t('Desayuno incluido')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva es necesario acceder a la web del hotel, y para las noches del 6 y 7 de Octubre se ha habilitado un  código de descuento: 2GS  que hay que escribir en el apartado: Ver Tarifas / Tarifas especiales / Corporativo-Promoción-nºSET')}</p>
            
            
          </div>
          <div className="hotels-blocks__item col-6 col-md-3">
            <h3 className="hotels-blocks__item-title">Hotel Exe Cristal Palace</h3>
            <p>{t('Dirección')}</p>
            <p>Carrer de la Diputació, 257, 08007 Barcelona</p>
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-cristal-palace?share">Cómo llegar</a>
            <p>{t('Precios:')}</p>
            <p>{t('DUI: 153 €')}</p>
            <p>{t('DOB: 162 €')}</p>
            <p>{t('Precios por habitación y noche')}</p>
            <p>{t('IVA y desayuno incluido')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, es necesario escribir un email e indicar que se trata de una reserva del acuerdo corporate IAD.')}</p>
            <a 
                className="email__btn"
                href="#mailgo"
                data-address="reservas"
                data-domain="execristalpalace.com"
                data-subject="Reserva del acuerdo corporate IAD"
                >{t('Reservar')}
            </a>
          </div>
          <div className="hotels-blocks__item col-6 col-md-3">
            <h3 className="hotels-blocks__item-title">{t('Exe Plaza')}</h3>
            <p>{t('Dirección')}</p>
            <p>Ronda de la Universitat, 18, 08007 Barcelona</p>
            <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-plaza-catalunya?share">{t('Cómo llegar')}</a>
            <p>{t('Precios:')}</p>
            <p>{t('Dui: 177€')}</p>
            <p>{t('Doble: 185€')}</p>
            <p>{t('Precios por habitación y noche')}</p>
            <p>{t('IVA y desayuno incluido')}</p>
            <p>{t('Tasa turística no incluida')}</p>
            <p>{t('Para realizar reserva, escribir email e indicar que solicitan una habitación en referencia a la CONVENCIÓN NACIONAL IAD')}</p>
            <a 
                className="email__btn"
                href="#mailgo"
                data-address="info"
                data-domain="exeplazacatalunya.com"
                data-subject="Reserva para CONVENCIÓN NACIONAL IAD"
                >{t('Reservar')}</a>
          </div>
          <div className="hotels-blocks__item col-6 col-md-3">
            <h3 className="hotels-blocks__item-title">{t('Hotel KK')}</h3>
            <p>{t('Dirección')}</p>
            <p>{t('Passeig de Picasso, 26, 30, 08003 Barcelona')}</p>
            <a className="map__btn" target="_blank" href="https://goo.gl/maps/NTgJmF7L33pSrh49A">{t('Cómo llegar')}</a>
            <p>{t('Precios:')}</p>
            <p>{t('Dui: XXX€')}</p>
            <p>{t('Doble: XXX€')}</p>
            <p>{t('El acuerdo incluye:')}</p>
            <p>{t('Habitación Cosy Urban. (tasa turística no incluida)')}</p>
            <p>{t('Reservas deben enviar un correo e indicar la referencia IAD-CN22')}</p>
            <a 
                className="email__btn"
                href="#mailgo"
                data-address="reservations.picasso"
                data-domain="kkhotels.com"
                data-subject="Reserva con referencia IAD-CN22"
                >{t('Reservar')}
            </a>
          </div>
        </div>
      </div>
      <div class="extend-container">
        <div className="hotels-grid">
          <div className="hotels-grid__item">
            
            <StaticImage 
            src="../assets/images/exe-hotels-logo.png"
            alt="Hotel W"
            with="186"
            height="186"
            />
            <h3 className="hotels-grid__item-title">{t('H10 Marina')}</h3>
            <div className="hotels-grid__item-address">
              <p>{t('Dirección')}</p>
              <p>Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona</p>
              <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
              </div>
            <div>
              
            </div>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="h10.marina.barcelona"
              data-domain="h10hotels.com"
              >{t('Reservar')}
            </a>
          </div>
          <div className="hotels-grid__item">
            <StaticImage 
              src="../assets/images/h10-hotel-logo.png"
              alt="h10 Hotel"
              with="186"
              height="186"
              />
              <h3 className="hotels-grid__item-title">{t('H10 Marina')}</h3>
              
              <div className="hotels-grid__item-address">
                <p>{t('Dirección')}</p>
                <p>Olympic Village, Av. del Bogatell, 64, 68, 08005 Barcelona</p>
                <a className="map__btn" target="_blank" href="https://g.page/h10-marina-barcelona?share">Cómo llegar</a>
              </div>
              <div className="hotels-grid__item-conditions">
                <p>{t('Precios:')}</p>
                <p>{t('DUI: XXX €')}</p>
                <p>{t('DOB: XXX €')}</p>
                <p>{t('El acuerdo incluye')}</p>
                <ul>
                  <li>{t('Habitación superior')}</li>
                  <li>{t('Desayuno')}</li>
                  <li>{t('Acceso al spa')}</li>
                </ul>
              </div>

              <a 
                  className="email__btn"
                  href="#mailgo"
                  data-address="h10.marina.barcelona"
                  data-domain="h10hotels.com"
                  >{t('Reservar')}
              </a>

          </div>

          <div className="hotels-grid__item">
            <StaticImage 
              src="../assets/images/exe-hotels-logo.png"
              alt="Exe Cristal Hotel"
              with="186"
              height="186"
            />
            <h3 className="hotels-grid__item-title">Hotel Exe Cristal Palace</h3>
            
            <div className="hotels-grid__item-address">
              <p>{t('Dirección')}</p>
              <p>Carrer de la Diputació, 257, 08007 Barcelona</p>
              <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-cristal-palace?share">Cómo llegar</a>
            </div>
            <div className="hotels-grid__item-conditions">
              <p>{t('Precios:')}</p>
              <p>{t('DUI: 153 €')}</p>
              <p>{t('DOB: 162 €')}</p>
              <p>{t('Precios por habitación y noche')}</p>
              <p>{t('IVA y desayuno incluido')}</p>
              <p>{t('Tasa turística no incluida')}</p>
              <p>{t('Para realizar reserva, es necesario escribir un email e indicar que se trata de una reserva del acuerdo corporate IAD.')}</p>
            </div>
            
              <a 
                  className="email__btn"
                  href="#mailgo"
                  data-address="reservas"
                  data-domain="execristalpalace.com"
                  data-subject="Reserva del acuerdo corporate IAD"
                  >{t('Reservar')}
              </a>
            
            
          </div>
          <div className="hotels-grid__item">
          <StaticImage 
              src="../assets/images/exe-hotels-logo.png"
              alt="Hotel Exe Plaza"
              with="186"
              height="186"
            />
            <h3 className="hotels-grid__item-title">{t('Exe Plaza')}</h3>
            <div className="hotels-grid__item-address">
              <p>{t('Dirección')}</p>
              <p>Ronda de la Universitat, 18, 08007 Barcelona</p>
              <a className="map__btn" target="_blank" href="https://g.page/hotel-exe-plaza-catalunya?share">{t('Cómo llegar')}</a>
            </div>
            <div className="hotels-grid__item-conditions">
              <p>{t('Precios:')}</p>
              <p>{t('Dui: 177€')}</p>
              <p>{t('Doble: 185€')}</p>
              <p>{t('Precios por habitación y noche')}</p>
              <p>{t('IVA y desayuno incluido')}</p>
              <p>{t('Tasa turística no incluida')}</p>
              <p>{t('Para realizar reserva, escribir email e indicar que solicitan una habitación en referencia a la CONVENCIÓN NACIONAL IAD')}</p>
            </div>
            <a 
              className="email__btn"
              href="#mailgo"
              data-address="info"
              data-domain="exeplazacatalunya.com"
              data-subject="Reserva para CONVENCIÓN NACIONAL IAD"
              >{t('Reservar')}</a>
          </div>
          <div className="hotels-grid__item">
          <StaticImage 
              src="../assets/images/kk-hotels-logo.png"
              alt="Hotel KK"
              with="186"
              height="186"
            />
          <h3 className="hotels-grid__item-title">{t('Hotel KK')}</h3>
          <div className="hotels-grid__item-address">
            <p>{t('Dirección')}</p>
            <p>{t('Passeig de Picasso, 26, 30, 08003 Barcelona')}</p>
            <a className="map__btn" target="_blank" href="https://goo.gl/maps/NTgJmF7L33pSrh49A">{t('Cómo llegar')}</a>
            </div>
            <div className="hotels-grid__item-conditions">
              <p>{t('Precios:')}</p>
              <p>{t('Dui: XXX€')}</p>
              <p>{t('Doble: XXX€')}</p>
              <p>{t('El acuerdo incluye:')}</p>
              <p>{t('Habitación Cosy Urban. (tasa turística no incluida)')}</p>
              <p>{t('Reservas deben enviar un correo e indicar la referencia IAD-CN22')}</p>
            </div>
            <a 
                className="email__btn"
                href="#mailgo"
                data-address="reservations.picasso"
                data-domain="kkhotels.com"
                data-subject="Reserva con referencia IAD-CN22"
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