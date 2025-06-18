import './Contact.css';

import { ContactCard } from '../contact/ContactCard';
import { Map } from '../map/Map';
import { ProjectInfo } from '../contact/ProjectInfo';

const contact = {
  name: 'Codingheart',
  email: 'codingheart@web.de',
  instagram: 'https://www.instagram.com/thecodingheart/',
  img: '/img/sylvia-rainbowheart.jpg',
  info: 'Curious by nature and passionate about learning and discovering new things.',
  jobtitel: 'Junior Fullstack Web Developer',
  location: {
    city: 'Hamburg',
    country: 'Germany',
    lng: '9.921828561927141',
    lat: '53.554197560299826',
  },
};

export function Contact() {
  return (
    <main className='contact'>
      <section className='contact__card'>
        <ContactCard
          img={contact.img}
          name={contact.name}
          jobtitel={contact.jobtitel}
          info={contact.info}
          location={contact}
          email={contact.email}
        />
      </section>
      <section className='contact__infos'>
        <Map
          posts={[contact]}
          zoomLevel={12}
          showDetailLink={false}
          isContactMap={true}
        />
        <ProjectInfo />
      </section>
    </main>
  );
}
