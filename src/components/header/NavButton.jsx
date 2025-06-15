import { NavLink } from 'react-router';

import './NavButton.css';

export function NavButton({ to, Icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-button' + (isActive ? ' active' : '')}
    >
      {Icon && <Icon className='nav-button__icon' />}
      {children}
    </NavLink>
  );
}
