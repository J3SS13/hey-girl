import axios from 'axios';


async function getPosts(industryId){
  const resp = await axios({
    url: `/industries/${industryId}/posts`
    });
  console.log(resp);
  return resp.data;
}

async function addPosts(industryId, data){
  const resp = await axios({
    url: `/industries/${industryId}/posts`,
    body: data
    });
  console.log(resp);
  return resp.data;
}

async function updatePost(industryId, postId){
  const resp = await axios({
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

export {getPosts, addPosts}
