import { Component } from "react";

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item.largeImageURL);
  };

  render() {
    const { item } = this.props;
    return (
      <li>
        <img
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}
