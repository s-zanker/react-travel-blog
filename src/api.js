const api = '/api/v1/posts';

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

//TODOS:

//sendAddPost(newData)

//sendPostUpdate()
