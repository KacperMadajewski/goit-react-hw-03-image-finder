import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { items, onItemClick } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} onClick={onItemClick} />
        ))}
      </ul>
    );
  }
}
