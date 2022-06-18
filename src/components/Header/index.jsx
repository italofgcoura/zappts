import React from 'react';

import { NavLink } from 'react-router-dom';
import { MenuContainer, Menu } from './styles';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

function Header() {
  const activeClassName = 'active';
  const url = window.location.href.toString();
  return (
    <MenuContainer>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Menu>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => ((isActive && !url.includes('pokemons')) ? activeClassName : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="pokemons"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Pokemons
          </NavLink>
        </li>
      </Menu>
    </MenuContainer>
  );
}

export default Header;
