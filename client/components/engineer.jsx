import React from 'react';
import { BodyText, BodyLink } from '../style';

import crypto from '..//img/engineer/crypto-price-tracker.png'
import twitter from '../img/engineer/twitter-analytics.png';
import historical from '../img/engineer/historical-tracker.png';

const imgStyle = {
  display: 'block',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Engineer = () => (
  <div>
    <BodyText>Problem solving is fun! As an engineer, I build web apps -- typically in React, JavaScript, and Node.js.</BodyText>
    <BodyText>Here are some examples of my projects, which you can also find on my <BodyLink href="https://github.com/albullington/">GitHub:</BodyLink></BodyText> 
    <BodyLink href="https://github.com/albullington/ethereum-price-history">
    <img src={crypto} style={imgStyle} />
    </BodyLink>
    <BodyLink href="https://github.com/albullington/twitter-sentiments">
    <img src={twitter} style={imgStyle} />
    </BodyLink>
    <BodyLink href="https://github.com/albullington/mini-apps-2/tree/master/challenge_4">
    <img src={historical} style={imgStyle} />
    </BodyLink>
  </div>
)

export default Engineer;
