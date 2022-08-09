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
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-4">
            <StaticImage 
              src="../assets/images/logo-horizontal.png"
              alt="logo"
              width={400}
              height={70}
              placeholder="none"
            />
          </div>

          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
              <div className="container">
                <a
                  className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
                  href="/#"
                >
                </a>

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
                      <Link className="nav-link text-uppercase text-expanded" to="/">
                      {t('Convención Nacional’22')}
                      </Link>
                    </li>
                    <li
                      className={`nav-item px-lg-4 ${
                        activeLink === 'program' ? 'active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link text-uppercase text-expanded"
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
                        className="nav-link text-uppercase text-expanded"
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
                        className="nav-link text-uppercase text-expanded"
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
                        className="nav-link text-uppercase text-expanded"
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
        </div>
      </div>
    );
  }
}

export default withTranslation()(Header);
