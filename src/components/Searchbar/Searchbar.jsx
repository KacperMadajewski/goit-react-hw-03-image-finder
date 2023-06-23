import React, { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { forSubmit, forChange} = this.props;
    return (
      <header>
        <form onSubmit={forSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            name="word"
            onChange={forChange}
          />
        </form>
      </header>
    );
  }
}
