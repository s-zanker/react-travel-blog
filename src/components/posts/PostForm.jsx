import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';

import { fetchAllAuthors } from '../../api';
import { IconButton } from '../elements/IconButton';
import { IoChevronBackCircle } from 'react-icons/io5';
import { PostTitle } from '../posts/PostTitle';

import './PostForm.css';

export function PostForm({ addPost }) {
  const [authors, setAuthors] = useState();
  const formRef = useRef(null);
  const navigate = useNavigate();

  async function loadAuthors() {
    const fetchedAuthors = await fetchAllAuthors();
    setAuthors(fetchedAuthors);
  }

  useEffect(() => {
    loadAuthors();
  }, []);

  if (!authors) {
    return <p>Authors not found or still loading details...</p>;
  }

  function handleCancelBtnClick() {
    formRef.current.reset();
    navigate('/'); //to dashboard
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    console.log('Raw form values: ', formValues);

    const { city, country, lng, lat, ...rest } = formValues; //Destructering

    const postData = {
      ...rest, //title, authorId, description, summary, date, thumbnail, image
      location: {
        city,
        country,
        lng,
        lat,
      },
    };

    addPost(postData);
    formRef.current.reset();

    console.log('PostForm - Data to submit: ', postData);
  }

  return (
    <div className='post-form-layout'>
      <div className='post-form__header'>
        <div className='post-form__header-cancel-button'>
          <IconButton
            onBtnClick={() => handleCancelBtnClick()}
            btnText='Cancel'
            Icon={<IoChevronBackCircle />}
          />
        </div>
        <span className='post-form__header-headline'>
          <PostTitle title='New Post' />
        </span>
      </div>

      <div className='post-form-container'>
        <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
          <div className='post-form'>
            <fieldset>
              <legend>Travel Information</legend>
              <label htmlFor='title'>Title:</label>
              <input id='title' name='title' type='text' required />

              <label htmlFor='date'>Date:</label>
              <input id='date' name='date' type='date' required />

              <label htmlFor='description'>Description:</label>
              <input id='description' name='description' type='text' />

              <label htmlFor='summary'>Summary:</label>
              <textarea
                id='summary'
                name='summary'
                rows='5'
                cols='33'
                placeholder='A short summary of the post...'
              ></textarea>
            </fieldset>

            <fieldset>
              <legend>Location Details</legend>
              <label htmlFor='city'>City:</label>
              <input id='city' name='city' type='text' />

              <label htmlFor='country'>Country:</label>
              <input id='country' name='country' type='text' />

              <label htmlFor='lng'>lng:</label>
              <input
                id='lng'
                name='lng'
                type='text'
                placeholder='e.g. 9.921828561927141'
              />

              <label htmlFor='lat'>lat:</label>
              <input
                id='lat'
                name='lat'
                type='text'
                placeholder='e.g. 53.554197560299826'
              />
            </fieldset>

            <fieldset>
              <legend>Media & Author</legend>
              <label htmlFor='image'>Image:</label>
              <select id='image' name='image' required>
                <option value=''>--Please select a image--</option>
                <option value='/img/st-peter-ording.jpg'>
                  St. Peter Ording Strand
                </option>
                <option value='/img/hegau.jpg'>Hegau Sundowner</option>
                <option value='/img/rimini.jpg'>Rimini Strand</option>
                <option value='/img/placeholder.jpg'>Placeholder Image</option>
              </select>

              <label htmlFor='thumbnail'>Thumbnail:</label>
              <select id='thumbnail' name='thumbnail' required>
                <option value=''>--Please select a thumbnail--</option>
                <option value='/img/st-peter-ording-thumbnail.jpg'>
                  St. Peter Ording Strand
                </option>
                <option value='/img/hegau-thumbnail.jpg'>
                  Hegau Sundowner
                </option>
                <option value='/img/rimini-thumbnail.jpg'>Rimini Strand</option>
                <option value='/img/placeholder.jpg'>
                  Placeholder thumbnail
                </option>
              </select>

              <label htmlFor='authorId'>Author:</label>
              <select id='authorId' name='authorId' required>
                <option value=''>--Please select an author--</option>
                {authors.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </fieldset>

            <button className='post-form__submit' type='submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
