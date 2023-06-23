import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
