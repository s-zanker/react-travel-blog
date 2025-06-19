import './PostForm.css';

export function PostForm({ addPost }) {
  const authors = [
    { _id: '6845bb48ad694ea9e6f31dd0', name: 'Codingheart' },
    { _id: '68471c2db408becd6163c336', name: 'Dachzelt Nomadin' },
  ];

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
    event.target.reset();

    console.log('PostForm - Data to submit: ', postData);
  }

  return (
    <div className='post-form-container'>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className='post-form'>
          <fieldset>
            <legend>Travel Information</legend>
            <label htmlFor='title'>Title:</label>
            <input id='title' name='title' placeholder='Title' type='text' />

            <label htmlFor='date'>Date:</label>
            <input id='date' name='date' type='date' />

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
            <legend>Media & Author</legend>
            <label htmlFor='image'>Image:</label>
            <select id='image' name='image'>
              <option value=''>--Please select a image--</option>
              <option value='/img/hamburg-2.jpg'>Hamburg Elbstrand</option>
              <option value='/img/placeholder.jpg'>Placeholder Image</option>
            </select>

            <label htmlFor='thumbnail'>Thumbnail:</label>
            <select id='thumbnail' name='thumbnail'>
              <option value=''>--Please select a thumbnail--</option>
              <option value='/img/hamburg-2-thumbnail.jpg'>
                Hamburg Elbstrand thumbnail
              </option>
              <option value='/img/placeholder.jpg'>
                Placeholder thumbnail
              </option>
            </select>

            <label htmlFor='authorId'>Author:</label>
            <select id='authorId' name='authorId'>
              <option value=''>--Please select an author--</option>
              {authors.map((author) => (
                <option key={author._id} value={author._id}>
                  {author.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <legend>Location Details</legend>
            <label htmlFor='city'>City:</label>
            <input id='city' name='city' type='text' placeholder='City' />

            <label htmlFor='country'>Country:</label>
            <input
              id='country'
              name='country'
              type='text'
              placeholder='Country'
            />

            <label htmlFor='lng'>lng:</label>
            <input id='lng' name='lng' type='text' />

            <label htmlFor='lat'>lat:</label>
            <input id='lat' name='lat' type='text' />
          </fieldset>

          <button className='post-form__submit' type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
