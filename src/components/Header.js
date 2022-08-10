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
    return (
      <div className="container header-container">
        <div className="row mt-3">
          <div className="col-12 col-md-2">
            <StaticImage 
              imgClassName="site-logo"
              className="site-logo-wrap"
              src="../assets/images/logo-header.png"
              placeholder="none"
              alt="iad logo"
            />
          </div>

          <div className="col-12 col-md-9 main-nav-container">
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
                        {t('Convención Nacional’22')}
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
                        {t('Program')}
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
                        {t('Location')}
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
                        {t('Hotels')}
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
