import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import { BodyText, BodyLink } from '../style';

const imgStyle = {
  display: 'block',
  width: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const photoTags = ['BkGsyOQHVS-', 'Bjp7WJznQS_', 'BkQTDvzHnsi'];

const Photographer = () => (
  <div>
  <BodyText>I find beauty in natural landscapes and city skylines. Here are a few examples of my recent photography -- visit my <BodyLink href="https://www.instagram.com/albullington/">Instagram feed</BodyLink>to see more. </BodyText>
  { photoTags.map((item) => {
      return ( 
        <InstagramEmbed
          url={`https://www.instagram.com/p/${item}/`}
          style={imgStyle}
          key={item.toString()}
          maxWidth={280}
          hideCaption={true}
          containerTagName='div'
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      )
    })
  }
  </div>
)

export default Photographer;
