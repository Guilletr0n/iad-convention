import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
      <StaticImage 
        src="../assets/images/footer-logo.png"
        alt="logo"
        width={140}
        height={152}
      />
        <p className="m-0 small">Contineroso</p>
      </div>
    </footer>
  );
}