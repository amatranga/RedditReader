import React from 'react';

const Post = props => {
  const cur = props.post.data;
  const permalink = `https://www.reddit.com${cur.permalink}`;
  const subredditURL = `https://www.reddit.com/${cur.subreddit_name_prefixed}`;
  const userURL = `https://www.reddit.com/user/${cur.author}`;
  return (
    <div>
      <div className="row"> 
        <div className="col">
          <a href={cur.url}>{cur.title}</a>
        </div>
        <div className="col">
          <a href={userURL}>u/{cur.author}</a>
        </div>
        <div className="col">
          <a href={subredditURL}>{cur.subreddit_name_prefixed}</a>
        </div>  
        <div className="col">
          <a href={permalink}>View on Reddit</a>
        </div>    
      </div>
      <hr />
    </div>
  );
}

export default Post;
