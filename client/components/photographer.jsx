import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import { BodyText, BodyLink } from '../style';

const imgStyle = {
  display: 'block',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Photographer = () => (
  <div>
  <BodyText>I find beauty in natural landscapes and city skylines. Here are a few examples of my recent photography -- visit my <BodyLink href="https://www.instagram.com/albullington/">Instagram feed</BodyLink>to see more. </BodyText>
  <InstagramEmbed
    url='https://www.instagram.com/p/BkGsyOQHVS-/'
    style={imgStyle}
    maxWidth={280}
    hideCaption={true}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
  <InstagramEmbed
    url='https://www.instagram.com/p/Bjp7WJznQS_/?taken-by=albullington'
    style={imgStyle}
    maxWidth={280}
    hideCaption={true}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
  <InstagramEmbed
    url='https://www.instagram.com/p/BkQTDvzHnsi/'
    style={imgStyle}
    maxWidth={280}
    hideCaption={true}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
  </div>
)

export default Photographer;
