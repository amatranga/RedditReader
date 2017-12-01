import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      querry: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let querry = e.target.value;
    this.setState({querry});
  }

  handleSubmit(e) {
    e.preventDefault();
    const querry = this.state.querry;
    this.props.searchForSubreddit(querry);
    this.setState({querry: ''});
  }

  render() {
    return (
      <div className="col-sm-12 col-md-6 text-center" style={{"marginTop":"3em"}}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Subreddit"
            value={this.state.querry}
            onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Search</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
