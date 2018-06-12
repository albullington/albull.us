import React from 'react';

import { MenuItem } from '../style';

const Header = () => (
  <div>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/engineer">Engineer</MenuItem>
    <MenuItem to="/communicator">Communicator</MenuItem>
    <MenuItem to="/athlete">Athlete</MenuItem>
  </div>
)

export default Header;
