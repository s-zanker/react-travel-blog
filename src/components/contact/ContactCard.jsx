import { MdEmail } from 'react-icons/md';
import { PiInstagramLogoFill } from 'react-icons/pi';

import './ContactCard.css';

import { PostTitle } from '../posts/PostTitle';
import { PostImage } from '../posts/PostImage';

export function ContactCard({ img, name, jobtitel, info, email, location }) {
  function onClickHandler() {
    window.location.href = `mailto:${email}`;
  }
  return (
    <div className='contact-card' onClick={() => onClickHandler()}>
      <PostImage source={img} alt={name} variant='thumb' />
      <div className='contact-card__text'>
        <PostTitle title={name} />
        <p>{jobtitel}</p>
        <p className='contact-card__info'>{info}</p>
        <div className='contact-card__email'>
          <MdEmail className='contact-card__email-icon' />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
}
