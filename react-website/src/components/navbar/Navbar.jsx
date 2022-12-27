import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is ADV3?</a></p>
    <p><a href="#features">Composable Gaming</a></p>
    <p><a href="#possibility">Community Games</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)

// The CSS naming convention used here is:
// BEM -> Block Element Modifier
// https://sparkbox.com/foundry/bem_by_example

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button"><a href="https://adventurer-game.vercel.app/" target="_blank" rel="noopener noreferrer">Play Adventure Island</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {/* only if toggleMenu is true, render below */}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div    className="gpt3__navbar-menu_container-links">
              <Menu /> 
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button"><a href="https://adv3nture.xyz/" target="_blank" rel="noopener noreferrer">Enter Vault</a></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;