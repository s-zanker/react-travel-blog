import { BsInfoCircleFill } from 'react-icons/bs';

import './ProjectInfo.css';

export function ProjectInfo() {
  return (
    <div className='project-info'>
      <h2 className='project-info__title'>
        <BsInfoCircleFill />
        About this Project
      </h2>
      <p>
        This travel blog was created as part of the Fullstack Web Development
        course at Hamburg Coding School. It is a practice project to learn
        React, backend APIs, MongoDB, and working with MapTiler.
      </p>
      <p>
        The goal was to create a simple but functional blog with map integration
        and reusable components.
      </p>
    </div>
  );
}
