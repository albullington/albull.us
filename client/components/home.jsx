import React from 'react';

import { BodyText, BodyLink, HomeLink, Container } from '../style';
import header from '../img/home/header.jpg';

const Home = () => (
  <Container>
    <HomeLink to="/athlete"><img id="header" src={header} alt="header" width="100%" /></HomeLink>
    <BodyText>I love <HomeLink to="/engineer">building programs,</HomeLink>improving processes, and <HomeLink to="/athlete">making things more efficient.</HomeLink></BodyText>
    <BodyText>I believe creating products requires a high degree of user empathy and <HomeLink to="/communication">strong communication.</HomeLink></BodyText>
    <BodyText>Hiring? <BodyLink href="mailto:amanda@albull.us">Contact me.</BodyLink></BodyText>
  </Container>
)

export default Home;
