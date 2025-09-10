import React, { useState } from 'react';
import Face from '../assets/home/Face';
import Floor from '../assets/home/Floor';
import { useLocation } from 'react-router';
import './MainContainer.scss';
import classNames from 'classnames';
import { useWindowSize } from '@uidotdev/usehooks';
import { Hamburger } from '../assets/nav/Hamburger';
import { Bookshelf } from '../assets/home/Bookshelf';

const NavBarMobile = () => {
  const location = useLocation();

  const aClassnamesWithNavLink = (navLink: string) => {
    return classNames('nav-link', {
      ['nav-link-active']: location.pathname === navLink,
    });
  };

  const [showNavMobile, setShowNavMobile] = useState(false);

  return (
    <nav className="navbar navbar-mobile">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link facePosterItem" href="/">
            <Face className="facePoster" />
          </a>
        </li>
        <button className="hamburger" onClick={() => setShowNavMobile(true)}>
          <Hamburger />
        </button>
        {showNavMobile && (
          <div className="drawer-nav">
            <div className="drawer-nav-header">
              <Face className="facePosterMobile" />
              <button
                className="drawer-nav-close"
                onClick={() => setShowNavMobile(false)}
              >
                X
              </button>
            </div>
            <ul className="drawer-nav-list">
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
                <a
                  className={aClassnamesWithNavLink('/writings')}
                  href="/writings"
                >
                  Writings
                </a>
              </li>
              <li className="nav-item">
                <a className={aClassnamesWithNavLink('/zines')} href="/zines">
                  Zines
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={aClassnamesWithNavLink('/contact')}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="drawer-footer">
              <Bookshelf className="bookshelf" />
              <Floor className="floor" />
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

const NavBarDesktop = () => {
  const location = useLocation();

  const aClassnamesWithNavLink = (navLink: string) => {
    return classNames('nav-link', {
      ['nav-link-active']: location.pathname === navLink,
    });
  };

  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link facePosterItem" href="/">
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
  );
};

const NavBar = () => {
  const size = useWindowSize();

  if (size?.width && size.width >= 768) {
    return <NavBarDesktop />;
  }

  return <NavBarMobile />;
};

const MainContainer = ({
  children,
  childrenContainerClassname,
}: {
  children: React.ReactNode;
  childrenContainerClassname?: string;
}) => {
  return (
    <div className="mainContainer">
      <NavBar />
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
