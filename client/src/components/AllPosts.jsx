import React from 'react';
import Post from './Post';

const AllPosts = props => {
  return (
    <div className="col text-center">
      <h4>Latest Posts</h4>
      {props.posts.map((post, idx) =>
        <Post key={idx} post={post} />
      )}
    </div>
  );
}

export default AllPosts;
