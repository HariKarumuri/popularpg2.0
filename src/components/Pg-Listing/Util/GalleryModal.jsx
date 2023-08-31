import React from "react";

const GalleryModal = ({ images, heading, onClose }) => {
  return (
    <div className="gallery-modal ">
      <div className="gallery-modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{heading}</h3>
        <div className="gallery-images">
          {images.map((image, index) => (
            <div className="gallery-image" key={index}>
              <img src={image.image} alt={`Image ${index}`} className="img-fluid gallery-img"  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
