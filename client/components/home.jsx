import React from 'react';

import { BodyTextCenter, BodyLink, HomeLink, Container } from '../style';
import header from '../img/home/header.jpg';

const Home = () => (
  <Container>
    <HomeLink to="/athlete"><img id="header" src={header} alt="header" width="100%" /></HomeLink>
    <BodyTextCenter>I love <HomeLink to="/engineer">building programs,</HomeLink>improving processes, and <HomeLink to="/athlete">making things more efficient.</HomeLink></BodyTextCenter>
    <BodyTextCenter>I believe creating products requires a high degree of user empathy and <HomeLink to="/communication">strong communication.</HomeLink></BodyTextCenter>
    <BodyTextCenter>Hiring? <BodyLink href="mailto:albullington@gmail.com">Contact me.</BodyLink></BodyTextCenter>
  </Container>
)

export default Home;
