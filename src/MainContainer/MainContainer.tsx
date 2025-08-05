import React from 'react';
import Face from '../assets/home/Face';
import Floor from '../assets/home/Floor';
import { useLocation } from 'react-router';
import './MainContainer.scss';
import classNames from 'classnames';

const MainContainer = ({
  children,
  childrenContainerClassname,
}: {
  children: React.ReactNode;
  childrenContainerClassname?: string;
}) => {
  const location = useLocation();

  const aClassnamesWithNavLink = (navLink: string) => {
    return classNames('nav-link', {
      ['nav-link-active']: location.pathname === navLink,
    });
  };

  return (
    <div className="mainContainer">
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              <Face className="facePoster" />
            </a>
          </li>
          <li className="nav-item">
            <a className={aClassnamesWithNavLink('/home')} href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={aClassnamesWithNavLink('/bio')} href="/bio">
              Bio
            </a>
          </li>
          <li className="nav-item">
            <a className={aClassnamesWithNavLink('/writings')} href="/writings">
              Writings
            </a>
          </li>
          <li className="nav-item">
            <a className={aClassnamesWithNavLink('/zines')} href="/zines">
              Zines
            </a>
          </li>
          <li className="nav-item">
            <a className={aClassnamesWithNavLink('/contact')} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`mainContainerChildrenContainer ${childrenContainerClassname || ''}`}
      >
        <div className="mainContainerChildren">{children}</div>
      </div>
      <footer>
        <Floor className="floor" />
      </footer>
    </div>
  );
};

export default MainContainer;
