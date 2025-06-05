import { NavLink } from 'react-router';
import { FaCompass } from 'react-icons/fa';

import './LogoTitle.css';

export function LogoTitle() {
  return (
    <NavLink to='/' className='logo-title'>
      <FaCompass className='logo-icon' />
      <span>Sylvia's Travel Blog</span>
    </NavLink>
  );
}
