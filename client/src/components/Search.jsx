import React from 'react';
import SearchResult from './SearchResult';

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
  }

  render() {
    return (
      <div className="col-sm-12 col-md-6 text-center">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Search</button>
          </span>
        </div>
        {this.props.searchResults.map((name, idx) => 
          <SearchResult
            key={idx}
            name={name}
            addSubreddit={this.props.addSubreddit} />
        )}
      </div>
    );
  }
}

export default Search;
