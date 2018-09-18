import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    );
  }

}

export default Header;