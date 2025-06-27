import { useEffect, useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

import './MenuBar.css';

import { LogoTitle } from './LogoTitle';
import { NavBar } from './NavBar';

export function MenuBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 875 && isMenuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className={`menu-bar ${scrolled ? 'scrolled' : 'initial'}`}>
      <LogoTitle scrolled={scrolled} setMenuOpen={setMenuOpen} />
      <NavBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className='burger-icon' onClick={toggleMenu}>
        {isMenuOpen ? <RxCross1 /> : <CiMenuBurger />}
      </div>
    </header>
  );
}
