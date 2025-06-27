import { NavLink } from 'react-router';

import './NavButton.css';

export function NavButton({ to, Icon, children, setMenuOpen }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-button' + (isActive ? ' active' : '')}
      onClick={() => setMenuOpen(false)}
    >
      {Icon && <Icon className='nav-button__icon' />}
      {children}
    </NavLink>
  );
}
