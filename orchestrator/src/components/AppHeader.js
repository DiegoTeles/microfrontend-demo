import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className='center-column'>
      <h1>Selecione o projeto </h1>
    </div>
    <nav>
      <ol className='center-column'>
        <li>
          <NavLink to='/'>Orquestrador</NavLink>
        </li>
        <li>
          <NavLink to='/cats'>Projeto 01</NavLink>
        </li>
        <li>
          <NavLink to='/catsTwo'>Projeto 02</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
