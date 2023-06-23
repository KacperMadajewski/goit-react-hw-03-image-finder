import { Component } from "react";


export class Modal extends Component {
  render() {
    const { isOpen, onClose, imageUrl } = this.props;
    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <img src={imageUrl} alt="Powiększony obraz" />
          <button onClick={onClose}>Zamknij</button>
        </div>
      </div>
    );
  }
}