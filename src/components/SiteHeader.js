import React from 'react';
import config from '../../config';
import { StaticImage } from "gatsby-plugin-image";

export default function SiteHeader() {
  return (
    <div>
      <StaticImage 
        src="../assets/images/logo-horizontal.png"
        alt="logo"
        width={400}
        height={70}
      />
    </div>
  );
}
