import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
