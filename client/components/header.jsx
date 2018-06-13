import React from 'react';

import logo from '../img/logo.png';
import { Menu, MenuItem } from '../style';

const Header = () => (
  <div>
    <img id="logo" src={logo} alt="Amanda Bullington" width="200px" />
    <Menu>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/engineer">Engineer</MenuItem>
    <MenuItem to="/communicator">Communicator</MenuItem>
    <MenuItem to="/athlete">Athlete</MenuItem>
    </Menu>
  </div>
)

export default Header;
