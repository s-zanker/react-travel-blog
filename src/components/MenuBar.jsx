import { LogoTitle } from './LogoTitle';
import { NavBar } from './NavBar';
import './MenuBar.css';

export function MenuBar() {
  return (
    <header className='MenuBar'>
      <LogoTitle />
      <NavBar />
    </header>
  );
}
