import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/business-casual.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';
import Warning from './Warning';
class Layout extends Component {
  render() {
    const {
      children,
      noHeader,
      noFooter,
      noSiteHeader,
      activeLink,
      noWarning
    } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Casual' },
                { name: 'keywords', content: 'site, web' },
              ]}
              link={[
                { "rel": "icon", "type": "image/png", "href": "../assets/favicon/favicon-16x16.png", sizes:"16x16", type:"image/png" },
                { "rel": "apple-touch-icon", "type": "image/png", "href": "../assets/favicon/favicon-32x32.png", sizes:"32x32", type:"image/png" },
                { "rel": "apple-touch-icon", "type": "image/png", "href": "../assets/favicon/safari-pinned-tab.svg" },
                { "rel": "mask-icon", "type": "image/png", "href": "../assets/favicon/safari-pinned-tab.svg", color:"#5bbad5" },
              ]}
            >
              <html lang="es" />
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>
            </Helmet>
            <div className={'page-top'}>
              {!noSiteHeader ? <SiteHeader /> : null}
              {!noHeader ? <Header activeLink={activeLink} /> : null}
              {children}
              {!noWarning ? <Warning/> :null}
              {!noFooter ? <Footer /> : null}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
  noWarning: PropTypes.bool,
};

export default Layout;
