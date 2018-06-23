import React from 'react';
import { BodyText, BodyLink, Container } from '../style';

const Home = () => (
  <Container>
    <BodyText>I love building programs, improving processes, and making things more efficient.</BodyText>
    <BodyText>I believe creating products requires a high degree of user empathy.</BodyText>
    <BodyText>Hiring? <BodyLink href="mailto:albullington@gmail.com">Contact me</BodyLink></BodyText>
  </Container>
)

export default Home;
