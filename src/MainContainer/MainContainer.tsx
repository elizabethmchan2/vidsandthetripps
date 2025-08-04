import React from 'react';
import Face from '../assets/home/Face';
import LeftWall from '../assets/home/LeftWall';
import Floor from '../assets/home/Floor';

import './MainContainer.scss';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mainContainer">
      <nav className="navbar">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              <Face className="facePoster" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bio">
              Bio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Writings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Zines
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mainContainerChildren">
        {children}
        <LeftWall className="leftWall" />
        <Floor className="floor" />
      </div>
    </div>
  );
};

export default MainContainer;
