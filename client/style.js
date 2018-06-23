import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative; 
  padding-bottom: 10px; 
  overflow: hidden;
`;

export const MenuItem = styled(Link)`
  padding-right: 25px;
  font-family: Montserrat;
  font-size: 20px;
  text-decoration: none;
  color: green;
  &:hover {
    text-decoration: underline;
  }; 
  @media only screen and (max-width : 750px) {
    font-size: 14px;
  }
`;

export const HomeLink = styled(Link)`
  font-family: Montserrat;
  font-size: 20px;  
  color: green;
  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  padding-right: 10px;
`;

export const Menu = styled.span`
  float: right;
  padding-top: 40px;
`;

export const BodyText = styled.p`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  width: 75%;
`;

export const BodyLink = styled.a`
  font-family: Montserrat;
  font-size: 20px;  
  color: green;
  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  padding-right: 10px;
`;

export const ResponsiveIframe = styled.div`
  position: relative; 
  padding-bottom: 75%; 
  padding-left: 30px;
  height: 0; 
  overflow: hidden;
`;

export const FooterStyle = styled.footer`
  position: relative;
  bottom: 0;
  text-align: center;
`;

