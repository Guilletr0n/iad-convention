import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
import { withTranslation } from 'gatsby-plugin-react-i18next';

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
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/#"
          >
            {config.siteTitle}
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
                {t('Home')}
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
                  activeLink === 'register' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/register"
                >
                  {t('Register')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(Header);
