import React from 'react';
import AllPosts from './AllPosts';
import Search from './Search';

class RedditReader extends React.Component {
  constructor() {
    super();
    this.state = {
      subreddits: [],
      posts: []
    };

    this.addSubreddit = this.addSubreddit.bind(this);
    this.delete = this.delete.bind(this);
    this.searchForSubreddit = this.searchForSubreddit.bind(this);
  }

  addSubreddit(subreddit) {
    const subreddits = this.state.subreddits;
    const nextId = Number(subreddits.length);
    const sub = {name: subreddit, id: nextId};
    subreddits.push(sub);
    this.setState({subreddits});
  }

  delete(id) {
    const filtered = this.state.subreddits.filter(el => el != id);
    this.setState(prevState => ({
      subreddits: prevState.subreddits.filter(el => el != id)
    }))
    this.setState({posts: [], subreddits: []});
    if (filtered.length > 0) {
      filtered.forEach(el => this.searchForSubreddit(el.name));
    }
  }

  searchForSubreddit(subreddit) {
    const getSubreddit = async (subreddit) => {
      let url = `https://www.reddit.com/search.json?q=subreddit%3A${subreddit}&sort=new&t=hour`;
      let res = await fetch(url);
      let data = await res.json();
      return data;
    };

    getSubreddit(subreddit)
      .then(data => {
        const children = data.data.children.slice(0, 5);
        if (children.length > 0) {
          this.addSubreddit(subreddit);
          const posts = this.state.posts.concat(children).sort((a,b) => a.data.created < b.data.created);
          this.setState({posts});
        }
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.searchForSubreddit('News');
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.subreddits.forEach(sub => this.searchForSubreddit(sub));
  }

  render() {
    return (
      <div className="container container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 text-center">
            <h3>My Subreddits</h3>
            <hr />
            
            {this.state.subreddits.map((sub, idx) =>
              <div key={idx} className="row justify-content-center" style={{"marginBottom":"2px"}}>
                <div className="col-8">
                  {sub.name}
                </div>
                <div className="col-4">
                  <button className="btn btn-danger" onClick={this.delete.bind(this, sub)}>Remove</button>
                </div>
              </div>
            )}
            
          </div>
          <Search
            addSubreddit={this.addSubreddit}
            searchForSubreddit={this.searchForSubreddit} 
            searchResults={this.state.searchResults} />
        </div>
        <hr />
        <div className="row justify-content-center">
          <AllPosts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default RedditReader;
