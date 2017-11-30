import React from 'react';

// const Subreddit = props => {
//   const name = props.subreddit;
//   return (
//     <div className="row justify-content-around">
//       <div className="col-8">
//         {name}
//       </div>
//       <div className="col-4">
//         <button className="btn btn-danger" onClick={props.removeSubreddit()}>Remove</button>
//       </div>
//     </div>
//   );
// }

class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const name = this.props.subreddit;
    this.setState({name});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.removeSubreddit(this.state.name);
  }

  render() {
    return (
      <div className="row justify-content-around" style={{"margin":"2px"}}>
        <div className="col-8">
          {this.state.name}
        </div>
        <div className="col-4">
          <button className="btn btn-danger" onClick={this.handleClick}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Subreddit;
