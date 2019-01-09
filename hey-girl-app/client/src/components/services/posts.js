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
  const resp = await axios.post(`/industries/${industryId}/posts`, data,
      {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

// Update post by Industry
async function updatePost(industryId, postId, data){
  const resp = await axios.put(`/industries/${industryId}/posts`, data,
      {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  return resp.data;
}

//Delete post by Industry
async function deletePost(industryId, postId){
  const resp = await axios.delete(`/industries/${industryId}/posts/${postId}`,{headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  return resp.data;
}

export { getPosts, addPost, updatePost, deletePost }
