import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <StaticImage 
              src="../assets/images/footer-logo.png"
              placeholder="none"
              alt="logo"
              width={140}
              height={152}
            />
          </div>
          <div className="col-md-2 offset-md-8">
            <p className="m-0">
              <a href="/legal" alt="aviso legal">
                Aviso Legal
                </a>
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}