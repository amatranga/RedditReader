import React from 'react';
import Subreddit from './Subreddit';

const MySubreddit = props => {
  return (
    <div className="col-sm-12 col-md-6 text-center">
      <h3> My Subreddits </h3>
      <hr />
      {props.subreddits.map((subreddit, idx) =>
        <Subreddit key={idx} subreddit={subreddit} removeSubreddit={props.removeSubreddit} />
      )}
    </div>
  );
}

export default MySubreddit;
