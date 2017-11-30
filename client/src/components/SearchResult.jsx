import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    props.addSubreddit(this.props.name);
  }

  render() {
    return (
      <div>
        <button className="btn btn-link" onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default SearchResult;
