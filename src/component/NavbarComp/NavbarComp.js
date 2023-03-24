import React from 'react';
import './navbarcomp.css';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
  return (
    <nav className='nav fixed-top navbar-expand-sm text-right'>
      
      <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarcollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
      <img
            src="https://res.cloudinary.com/dnmtsuwhc/image/upload/v1678645849/u5ffbzghsirppkrzughq.png"
            width="50"
            class="rounded-2"
            height="40"
            alt="logo"
            id="logo_image"
          />
          <div>
          <div className='collapse navbar-collapse' id='navbarcollapse'>
            <ul className='navbar-nav'>
              <li className='nav-item px-2 '>
                < Link to="/" className='nav-link active text-right'>Home</Link>
              </li>
              <li className='nav-item px-2'>
                < Link to="/login" className='nav-link active text-right'>Login</Link>
              </li>
            </ul>
          </div>
          </div>
    </nav>
  )
}
