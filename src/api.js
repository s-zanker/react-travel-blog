const api =
  'https://s-test-react-travel-blog-api-210021db115a.herokuapp.com/api/v1/posts';
const api2 =
  'https://s-test-react-travel-blog-api-210021db115a.herokuapp.com/api/v1/authors';

//Posts
export async function fetchAllPosts() {
  const response = await fetch(api);
  const posts = await response.json();
  return posts;
}

export async function fetchPostById(id) {
  const uri = `${api}/${id}`;
  const response = await fetch(uri);
  const post = await response.json();
  return post; //returns the found post
}

export async function sendAddPost(newData) {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  const newId = await response.json();
  return newId;
}

export async function sendPostUpdate(id, dataToUpdate) {
  const uri = `${api}/${id}`;
  const response = await fetch(uri, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToUpdate),
  });
  const updated = await response.json();
  return updated; //true or false
}

//Authors
export async function fetchAllAuthors() {
  const response = await fetch(api2);
  const authors = await response.json();
  return authors;
}

export async function fetchAuthorById(id) {
  const uri = `${api2}/${id}`;
  const response = await fetch(uri);
  const author = await response.json();
  return author; //returns the found author
}
