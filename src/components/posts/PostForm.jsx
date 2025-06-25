import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';

import * as maptilersdk from '@maptiler/sdk';

import { fetchAllAuthors } from '../../api';

import './PostForm.css';

const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;
const DEFAULT_PROXIMITY = [9.90701762676456, 53.544732673943905]; // [lng, lat] for Hamburg

export function PostForm({ addPost }) {
  const [authors, setAuthors] = useState();
  const formRef = useRef(null);
  const navigate = useNavigate();

  // State for location fields and search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');
  const searchTimeoutRef = useRef(null);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [locationError, setLocationError] = useState('');

  //Helper Functions
  async function loadAuthors() {
    const fetchedAuthors = await fetchAllAuthors();
    setAuthors(fetchedAuthors);
  }
  function extractCityAndCountry(feature) {
    // The feature's 'text' property usually holds the primary name (e.g., "Berlin")
    const city = feature.text;

    // The 'context' array contains administrative hierarchy (country, region, etc.)
    const countryContext = feature.context?.find((c) =>
      c.id.startsWith('country')
    );
    // Use the English text for the country name if available, otherwise fallback to default text
    const country = countryContext?.text_en || countryContext?.text || '';

    return { city, country };
  }
  function resetLocationStates() {
    setCity('');
    setCountry('');
    setLng('');
    setLat('');
    setIsLocationSelected(false);
    setLocationError('');
  }
  function resetFormAndState() {
    formRef.current.reset();
    setSearchQuery('');
    setSearchResults([]);
    resetLocationStates();
  }
  //Event-Handler Functions
  //MapTiler Geocoding Search
  function handleSearchChange(e) {
    const query = e.target.value.trim(); //Trim whitespace from query
    setSearchQuery(query);

    // Reset validation states when user types
    resetLocationStates();

    // Debouncing logic: Clear the previous timer if it exists
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Don't send a request if the query is too short
    if (query.length < 3) {
      setSearchResults([]); // Clear results if the input is too short
      return;
    }

    // Set a new timer
    searchTimeoutRef.current = setTimeout(async () => {
      //Geocoding request
      const results = await maptilersdk.geocoding.forward(query, {
        autocomplete: true,
        fuzzyMatch: true,
        limit: 5,
        language: ['en'],
        proximity: DEFAULT_PROXIMITY, // Prioritize results near Germany
      });

      console.log(results.features);
      setSearchResults(results.features);
    }, 500); // wait 500ms, after user input
  }
  function handleSuggestionsClick(feature) {
    console.log('User clicked on a search result', feature);
    const [lng, lat] = feature.center;
    const { city, country } = extractCityAndCountry(feature);

    setCity(city);
    setCountry(country);
    setLng(lng);
    setLat(lat);

    // Show the full place name in the search bar and hide suggestions
    setSearchQuery(feature.place_name);
    setSearchResults([]);
    setIsLocationSelected(true);
    setLocationError('');
  }
  function handleCancelBtnClick() {
    resetFormAndState(); //reset form and state
    navigate('/'); //navigate to dashboard
  }
  function handleFormSubmit(event) {
    event.preventDefault();

    if (!isLocationSelected) {
      setLocationError('Please select a location from the search suggestions.');
      return;
    }

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
    resetFormAndState();
  }

  useEffect(() => {
    loadAuthors();
    maptilersdk.config.apiKey = MAPTILER_API_KEY;
  }, []);

  if (!authors) {
    return <p>Authors not found or still loading details...</p>;
  }
  return (
    <div className='post-form-container'>
      <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
        <div className='post-form'>
          <fieldset>
            <legend>Travel Information</legend>
            <label htmlFor='title'>Title:</label>
            <input id='title' name='title' type='text' minLength='5' required />

            <label htmlFor='date'>Date:</label>
            <input id='date' name='date' type='date' required />

            <label htmlFor='description'>Description:</label>
            <input
              id='description'
              name='description'
              type='text'
              minLength='10'
              required
            />

            <label htmlFor='summary'>Summary:</label>
            <textarea
              id='summary'
              name='summary'
              rows='5'
              cols='33'
              placeholder='A short summary of the post...'
              minLength='10'
              required
            ></textarea>
          </fieldset>

          <fieldset>
            <legend>Location Details</legend>

            <label htmlFor='locationSearch'>Search City:</label>
            <input
              id='locationSearch'
              type='text'
              placeholder='Start typing a city name...'
              value={searchQuery}
              onChange={(e) => handleSearchChange(e)}
              autoComplete='off'
              required
            />
            {locationError && (
              <p className='post-form__error'>{locationError}</p>
            )}
            {searchResults.length > 0 && (
              <ul className='post-form__search-suggestions'>
                {searchResults.map((feature) => (
                  <li
                    key={feature.id}
                    onClick={() => handleSuggestionsClick(feature)}
                  >
                    {feature.place_name}
                  </li>
                ))}
              </ul>
            )}

            <label htmlFor='city'>City:</label>
            <input
              id='city'
              name='city'
              type='text'
              value={city}
              placeholder='Auto-filled (e.g. Hamburg)'
              readOnly
            />

            <label htmlFor='country'>Country:</label>
            <input
              id='country'
              name='country'
              type='text'
              placeholder='Auto-filled (e.g. Germany)'
              value={country}
              readOnly
            />

            <label htmlFor='lng'>lng:</label>
            <input
              id='lng'
              name='lng'
              type='text'
              placeholder='Auto-filled (e.g. 9.921828561927141)'
              value={lng}
              readOnly
              required
            />

            <label htmlFor='lat'>lat:</label>
            <input
              id='lat'
              name='lat'
              type='text'
              placeholder='Auto-filled (e.g. 53.554197560299826)'
              value={lat}
              readOnly
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
              <option value='/img/hegau-thumbnail.jpg'>Hegau Sundowner</option>
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
          <div className='post-form__actions'>
            <button
              type='button'
              className='post-form__button post-form__cancel'
              onClick={() => handleCancelBtnClick()}
            >
              Cancel
            </button>
            <button
              className='post-form__button post-form__submit'
              type='submit'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
