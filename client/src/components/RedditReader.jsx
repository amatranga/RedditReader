import React from 'react';
import AllPosts from './AllPosts';
import MySubreddits from './MySubreddits';
import Search from './Search';

class RedditReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddits: ['News', 'Funny', 'Gifs'],
      searchResults: []
    }

    this.addSubreddit = this.addSubreddit.bind(this);
    this.searchForSubreddit = this.searchForSubreddit.bind(this);
    this.removeSubreddit = this.removeSubreddit.bind(this);
  }

  addSubreddit(subreddit) {
    const subreddits = this.state.subreddits;
    subreddits.push(subreddit);
    this.setState({subreddits});
  }

  searchForSubreddit(subreddit) {
    const getSubreddit = async (subreddit) => {
      let url = `https://www.reddit.com/search.json?q=subreddit%3A${subreddit}&sort=new&t=hour`;
      let res = await fetch(url);
      let data = await res.json();
      return data;
    }

    getSubreddit(subreddit)
      .then(data => {
        const children = data.data.children;
        if (children.length > 0) {
          this.addSubreddit(subreddit);
        }
      })
      .catch(err => console.log(err));
  }

  removeSubreddit(ele) {
    console.log(`Remove called on ${ele}`);
    this.setState((prevState, props) => ({
      subreddits: prevState.subreddits.filter(el => el !== ele)
    }));
  }

  render() {
    console.log(this.state.subreddits, 'STATE');
    return (
      <div>
        <div className="row justify-contene-around">
          <MySubreddits
            subreddits={this.state.subreddits}
            removeSubreddit={this.removeSubreddit} />
          <Search
            addSubreddit={this.addSubreddit}
            searchForSubreddit={this.searchForSubreddit} 
            searchResults={this.state.searchResults} />
        </div>
        <hr />
        <div className="row justify-content-center">
          <AllPosts />
        </div>
      </div>
    );
  }
}

export default RedditReader;
