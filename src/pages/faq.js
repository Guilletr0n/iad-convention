import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const FaqPage = () => {
  const {t} = useTranslation();
  return (
    <Layout activeLink="faq">
      <section className="page-section faq-page">
        <div className="container">
          <div className="row">
            <div class="col-12">
              <h1 className="mt-5 mb-3">{t('Preguntas Frecuentes')}</h1>
              <ul className="faq-list">
                <li>
                  <p className="faq-list__question">{t('Quién puede asistir al evento')}</p>
                  <ul className="faq-list__answers">
                    <li>{t('Todos los asesores y managers')}</li>
                    <li>{t('También podrán asistir')} <strong>{t('tambien managers internacionales')}</strong> {t('can also attend')}</li>
                    <li>{t('Miembros de la')} <strong>{t('sede iad España')}</strong> {t('y el resto de filiales del Grupo iad')}.</li>
                  </ul>
                </li>
                <li>
              <p className="faq-list__question">{t('Es mi primera Convención Nacional')}</p>
              <ul className="faq-list__answers">
                <li>{t('La Convención Nacional es uno de los eventos más importantes')}</li>
                <li>{t('Durante la Convención Nacional se realiza')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('Tarifas del evento')}</p>
              <ul className="faq-list__answers">
                <li>
                  <strong>{t('Early Bird')}.</strong> {t('Precio 65,00€')}
                  <p>{t('*La tarifa “Early Bird,” de coste')}</p>
                </li>
                <li>
                <strong>{t('Full Price')}.</strong> {t('Precio 89,00€ (IVA no incluido)')}.
                </li>
                <li>{t('Managers internacionales con')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿Cuál es el dress code')}</p>
              <ul className="faq-list__answers">
                <li>{t('El dress code es')} <a
                  href="https://www.pinterest.es/search/pins/?q=casual%20chic&rs=typed&term_meta%5b%5d=casual%7Ctyped&term_meta%5b%5d=chic%7Ctyped"
                  title="casual chic"
                  target="_blank"
                  rel="noreferrer"
                  >casual chic</a>
                </li>
              </ul>
              <StaticImage
                className="dress-code-caption"
                src="../assets/images/casual-chic.png"
                placeholder="blur"
                alt="casual chic"
                />
            </li>
            <li>
              <p className="faq-list__question">{t('¿Puedo venir con un acompañante?')}</p>
              <ul className="faq-list__answers">
                <li>{t('No, no se admiten acompañantes')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('Hay algún convenio con hoteles')}</p>
              <ul className="faq-list__answers">
                <li>{t('Sí, puedes consultar todas las posibilidades')}
                  <Link
                    to="/hotels" >
                      {t('aquí')}
                  </Link>.
                </li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿Puedo comprar entradas a mis ahijados o a mi equipo?')}</p>
              <ul className="faq-list__answers">
                <li>{t('Sí, es posible en la página de compra de tus entradas')} <strong>{t('datos del asistente')}</strong>
                <span> {t('y pon tus datos en')}</span> <strong>{t('Datos comprador')}</strong>{t('De esta forma')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿Puedo comprar varias entradas')}</p>
              <ul className="faq-list__answers">
                <li>{t('No está permitido comprar varias entradas con el mismo nombre')}</li>
                <li>{t('Si has adquirido varias')} <a
                  href="#mailgo"
                  data-address="eventos"
                  data-domain="iadgroup.es"
                  >eventos@iadgroup.es
                  </a> <span>{t('para la modificación de los datos')}</span>
                </li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿Hay una cantidad máxima de compra de entradas?')}</p>
              <ul className="faq-list__answers">
                <li>{t('Sí, 2 entradas por compra')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿La entrada es reembolsable?')}</p>
              <ul className="faq-list__answers">
                <li>{t('Las entradas adquiridas')}</li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('Tengo una alergia o intolerancia')}</p>
              <ul className="faq-list__answers">
                <li>{t('Puedes contactar con la organización')} <a
                  href="#mailgo"
                  data-address="eventos"
                  data-domain="iadgroup.es"
                  >eventos@iadgroup.es</a>
                </li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('Finalmente no voy')}</p>
              <ul className="faq-list__answers">
                <li>
                  {t('Por supuesto, sólo tienes que dirigirte')} <a
                    href="#mailgo"
                    data-address="eventos"
                    data-domain="iadgroup.es"
                    >eventos@iadgroup.es</a> {t('especificando a quién vendes')}
                </li>
              </ul>
            </li>
            <li>
              <p className="faq-list__question">{t('¿Tienes más preguntas?')}</p>
              <ul className="faq-list__answers">
                <li>{t('Contacta con')} <a
                  href="#mailgo"
                  data-address="eventos"
                  data-domain="iadgroup.es"
                  >eventos@iadgroup.es
                  </a> {t('y aclararemos tus dudas')}</li>
              </ul>
            </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage;

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









