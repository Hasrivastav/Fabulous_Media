import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import './Header.scss';

const Header = () => {
  return (
    <nav>
      <div className='left'>
        <h1>DESIGNONE</h1>
        <main>
          <HashLink to={"/#home"}>Home</HashLink>
          <Link to={"/contact"}>Blog</Link>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#brands"}>Services</HashLink>
        </main>
      </div>
      {/* <h1>Call Us: 0800 123-4567</h1> */}
      <button >Contact US</button>
    </nav>
  )
}

export default Header;
