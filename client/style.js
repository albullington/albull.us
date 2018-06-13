import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItem = styled(Link)`
  padding-right: 25px;
  font-family: Montserrat;
  font-size: 20px;
  text-decoration: none;
  color: green;
  &:hover {
    text-decoration: underline;
  }
`;

export const Menu = styled.span`
  float: right;
  padding-top: 20px;
`;

export const BodyText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
`;
