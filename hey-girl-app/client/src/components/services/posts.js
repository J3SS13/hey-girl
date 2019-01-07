import axios from 'axios';

//Get all posts for specific Industry
async function getPosts(industryId){
  const resp = await axios({
    url: `/industries/${industryId}/posts`
    });
  return resp.data;
}

async function addPost(industryId, data){

  const resp = await axios.post(`/industries/${industryId}/posts`, data);
}

async function updatePost(industryId, postId, data){
  const resp = await axios.put({
    url: `/industries/${industryId}/posts/${postId}`,
    body: data
    });
  console.log(resp);
  return resp.data;
}

async function deletePost(industryId, postId){
  const resp = await axios({
    url: `/industries/${industryId}/posts/${postId}`
  });
  return resp.data;
}

export { getPosts, addPost }
