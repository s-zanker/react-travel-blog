import { PiInstagramLogoFill } from 'react-icons/pi';
import { CiAt } from 'react-icons/ci';

import './PopupContact.css';

import { PostLocation } from '../posts/PostLocation';
import { PostAuthor } from '../posts/PostAuthor';

export function PopupContact({ contact }) {
  return (
    <div className='map-popup-contact'>
      <h3>{contact.jobtitel}</h3>
      <div className='map-popup-contact__author'>
        <PostAuthor author={contact} />
        <span className='map-popup-contact__at-symbol'>
          <CiAt />
        </span>
        <a
          aria-label={`${contact.name} on Instagram`}
          className='map-popup-contact__link'
          href={contact.instagram}
          target='_blank' // Open in new tab
          rel='noopener noreferrer' // Security best practice
        >
          <PiInstagramLogoFill className='map-popup-contact__icon' />
        </a>
      </div>
      <PostLocation post={contact} />
    </div>
  );
}
