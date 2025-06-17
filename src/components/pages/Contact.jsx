import './Contact.css';

import { ContactCard } from '../contact/ContactCard';
import { Map } from '../map/Map';
import { ProjectInfo } from '../contact/ProjectInfo';

const contactPerson = {
  name: 'Codingheart',
  email: 'codingheart@web.de',
  img: '/img/sylvia-rainbowheart.jpg',
  info: 'Curious by nature and passionate about learning and discovering new things.',
  jobtitel: 'Junior Fullstack Web Developer',
  location: {
    city: 'Hamburg',
    country: 'Germany',
  },
};

const mapData = {
  _id: 'contact-map',
  title: 'Based in Hamburg',
  location: {
    city: 'Hamburg',
    country: 'Germany',
    lng: '9.921828561927141',
    lat: '53.554197560299826',
  },
  date: '2025-06-20',
  authorInfo: {
    name: contactPerson.name,
    email: contactPerson.email,
    img: contactPerson.img,
    info: contactPerson.info,
    jobtitel: contactPerson.jobtitel,
    location: contactPerson.location,
  },
};

export function Contact() {
  return (
    <main className='contact'>
      <section className='contact__card'>
        <ContactCard
          img={contactPerson.img}
          name={contactPerson.name}
          jobtitel={contactPerson.jobtitel}
          info={contactPerson.info}
          location={contactPerson}
          email={contactPerson.email}
        />
      </section>
      <section className='contact__infos'>
        <Map posts={[mapData]} zoomLevel={12} showDetailLink={false} />
        <ProjectInfo />
      </section>
    </main>
  );
}
