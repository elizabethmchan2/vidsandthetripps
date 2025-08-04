import React from 'react';
import Face from '../assets/home/Face';
import './MainContainer.scss';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mainContainer">
      <nav className="navbar">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Face className="facePoster" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
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
      <div className="mainContainerChildren">{children}</div>
    </div>
  );
};

export default MainContainer;
