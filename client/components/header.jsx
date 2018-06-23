import React from 'react';

import logo from '../img/logo.png';
import { Container, Menu, MenuItem, HomeLink } from '../style';

const Header = () => (
  <Container>
    <HomeLink to="/"><img id="logo" src={logo} alt="Amanda Bullington" width="200px" /></HomeLink>
    <Menu>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/engineer">Engineer</MenuItem>
    <MenuItem to="/communicator">Communicator</MenuItem>
    <MenuItem to="/athlete">Athlete</MenuItem>
    </Menu>
  </Container>
)

export default Header;
