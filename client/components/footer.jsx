import React from 'react';

import { FooterStyle, BodyLink } from '../style';
import linkedin from '../img/icons/linkedin.png';
import github from '../img/icons/github.png';
import email from '../img/icons/email.png';
import instagram from '../img/icons/instagram.png';

const imgStyle = {
  width: '10%',
  height: '10%',
};

const Footer = () => (
  <FooterStyle>
    <BodyLink href="http://www.github.com/albullington">
      <img src={github} style={imgStyle} />
    </BodyLink>
    <BodyLink href="http://www.linkedin.com/in/albull">
      <img src={linkedin} style={imgStyle} />
    </BodyLink>
    <BodyLink href="mailto:amanda@albull.us">
      <img src={email} style={imgStyle} />
    </BodyLink>
    <BodyLink href="https://www.instagram.com/albullington/">
      <img src={instagram} style={imgStyle} />
    </BodyLink>
  </FooterStyle>
)

export default Footer;
