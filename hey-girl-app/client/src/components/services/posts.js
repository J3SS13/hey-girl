import axios from 'axios';

//Get all posts for specific Industry
async function getPosts(industryId){
  const resp = await axios({
    url: `/industries/${industryId}/posts`
    });
  return resp.data;
}

//Add post by Industry
async function addPost(industryId, data){
  const resp = await axios.post(`/industries/${industryId}/posts`, data);
}

// Update post by Industry
async function updatePost(industryId, postId, data){
  const resp = await axios.put(`/industries/${industryId}/posts/${postId}`,
    data
    );
  console.log(resp);
  return resp.data;
}

//Delete post by Industry
async function deletePost(industryId, postId){
  const resp = await axios.delete(`/industries/${industryId}/posts/${postId}`);
  return resp.data;
}

export { getPosts, addPost, updatePost, deletePost }
