import React from 'react';
import Post from './Post';

export default function PostList(props){
  return(
    <div id="post-list">
    {props.posts.map(post => (

        <Post
          key={post.id}
          topic={post.topic}
          id={post.id}
          body={post.body}
          post={post}
          handleDeletePost={props.handleDeletePost}
          onEdit={(e) => {
                e.stopPropagation();
                props.onEdit(post)
              }}
          />
          ))}
    </div>
  )
}
