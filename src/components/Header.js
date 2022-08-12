import React, { Component } from 'react';
import { Link, withTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
    
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    const { t } = this.props;
    const { i18n } = this.props;
    return (
      <div className="container header-container">
        <div className="row">
          <div className="col-12 col-md-2 pt-3">
            <StaticImage
              imgClassName="site-logo"
              className="site-logo-wrap"
              src="../assets/images/logo-header.png"
              placeholder="none"
              alt="iad logo"
            />
          </div>

          <div className="col-12 col-md-9 pt-3 main-nav-container ">
            <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
              <div className="container">
                
                <button
                  onClick={_ => this.toggleMenu(!openMenu)}
                  className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
                  type="button"
                  aria-controls="navbarResponsive"
                  aria-expanded={openMenu}
                  aria-label="Toggle navigation"
                >
                  <span>
                  <StaticImage
                  imgClassName="close-button"
                    src="../assets/icons/icon-close.svg"
                    placeholder="none"
                    alt="close icon"
                    width={30}
                    height={30}
                  /></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
                  id="navbarResponsive"
                >
                  <ul className="navbar-nav text-center mx-auto">
                    <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'home' ? 'active' : ''
                      }`}
                    >
                      <Link className="nav-link text-expanded" to="/">
                        {t('Convención Nacional')}
                      </Link>
                    </li>
                    <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'program' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link text-expanded"
                        to="/program"
                      >
                        {t('Programa')}
                      </Link>
                    </li>
                    <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'location' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link text-expanded"
                        to="/location"
                      >
                        {t('Localización')}
                      </Link>
                    </li>
                    <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'hotels' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link text-expanded"
                        to="/hotels"
                      >
                        {t('Hoteles')}
                      </Link>
                      </li>
                      <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'tickets' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link text-expanded"
                        to="/tickets"
                      >
                        {t('Entradas')}
                      </Link>
                    </li>
                    <li className='nav-item flag-button'>
                    <Link
                      className={`nav-link text-expanded ${i18n.language === 'en' ? 'lan-selected' : ' '}`}
                      to={`/${activeLink}`}
                      language='en'
                      >
                        <StaticImage 
                          src="../assets/icons/icon-flag-uk.png"
                          className="flag-icon"
                          placeholder="none"
                          alt="icon flag uk"
                          width={35}
                          height={35}
                        />
                      </Link>
                    
                    </li>
                    <li className="flag-button">
                    <Link
                      className={`nav-link text-expanded ${i18n.language === 'es' ? 'lan-selected' : ' '}`}
                      to={`/${activeLink}`}
                      language='es'
                      >
                        <StaticImage 
                          src="../assets/icons/icon-flag-spain.png"
                          className="flag-icon"
                          placeholder="none"
                          alt="icon flag spain"
                          width={35}
                          height={35}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-1">
            <div className="navbar-dday">
              <span className="navbar-dday__day">7</span>
              <span className="navbar-dday__month">OCT</span>
              <span className="navbar-dday__year">2022</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Header);
