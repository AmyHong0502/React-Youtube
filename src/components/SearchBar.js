import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
