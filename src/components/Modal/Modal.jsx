import { Component } from "react";


export class Modal extends Component {
  render() {
    const { isOpen, onClose, imageUrl } = this.props;
    if (!isOpen) return null;

    return (
      <div>
        <div>
          <img src={imageUrl} alt="Powiększony obraz" />
          <button onClick={onClose}>Zamknij</button>
        </div>
      </div>
    );
  }
}