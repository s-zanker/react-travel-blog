import { useEffect, useState } from 'react';

import './MenuBar.css';

import { LogoTitle } from './LogoTitle';
import { NavBar } from './NavBar';

export function MenuBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`MenuBar ${scrolled ? 'scrolled' : 'initial'}`}>
      <LogoTitle scrolled={scrolled} />
      <NavBar />
    </header>
  );
}
