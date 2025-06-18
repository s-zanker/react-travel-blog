import { useState, useEffect } from 'react';
import { fetchAuthorById } from '../../api';

import './Contact.css';

import { ContactCard } from '../contact/ContactCard';
import { Map } from '../map/Map';
import { ProjectInfo } from '../contact/ProjectInfo';

export function Contact() {
  const id = '6845bb48ad694ea9e6f31dd0'; //Codingheart
  //const id = '68471c2db408becd6163c336'; //Konsumrebellin

  const [author, setAuthor] = useState();

  async function loadAuthorById(authorId) {
    const fetchedAuthor = await fetchAuthorById(authorId);
    setAuthor(fetchedAuthor);
  }

  useEffect(() => {
    loadAuthorById(id);
  }, [id]);
  if (!author) {
    return <p>Author not found or still loading details...</p>;
  }
  return (
    <main className='contact'>
      <section className='contact__card'>
        <ContactCard
          img={author.img}
          name={author.name}
          jobtitel={author.jobtitel}
          info={author.info}
          location={author}
          email={author.email}
        />
      </section>
      <section className='contact__infos'>
        <Map
          posts={[author]}
          zoomLevel={12}
          showDetailLink={false}
          isContactMap={true}
        />
        <ProjectInfo />
      </section>
    </main>
  );
}
