import React, { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { forSubmit } = this.props;
    return (
      <header class="searchbar">
        <form class="form" onSubmit={forSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="word"
          />
        </form>
      </header>
    );
  }
}
