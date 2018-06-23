import React from 'react';
import { BodyTextCenter, BodyLink } from '../style';

import twitter from '../img/engineer/twitter-analytics.png';

const imgStyle = {
  display: 'block',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Engineer = () => (
  <div>
    <BodyTextCenter>I love problem solving. As an engineer, I build web apps in React, JavaScript, and Node.js. Before moving into engineering, I built new marketing programs and processes from the ground up at San Francisco fintech startups NerdWallet and Ripple.</BodyTextCenter>
    <BodyTextCenter>Here are some examples of my projects:</BodyTextCenter> 
    <BodyLink href="https://github.com/albullington/twitter-sentiments">
    <img src={twitter} style={imgStyle} />
    </BodyLink>
  </div>
)

export default Engineer;
