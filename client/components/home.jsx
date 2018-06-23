import React from 'react';
import { BodyText, BodyLink, Container } from '../style';

import header from '../img/home/header.jpg';

const Home = () => (
  <Container>
    <img id="header" src={header} alt="header" width="100%" />
    <BodyText>I love building programs, improving processes, and making things more efficient.</BodyText>
    <BodyText>I believe creating products requires a high degree of user empathy.</BodyText>
    <BodyText>Hiring? <BodyLink href="mailto:albullington@gmail.com">Contact me</BodyLink></BodyText>
  </Container>
)

export default Home;
