import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/engineer">Engineer</Link>
    <Link to="/communicator">Communicator</Link>
    <Link to="/athlete">Athlete</Link>
  </div>
)

export default Header;
