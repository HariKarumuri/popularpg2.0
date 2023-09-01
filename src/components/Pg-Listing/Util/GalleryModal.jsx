import React from "react";

const GalleryModal = ({ images, title, Coverimage }) => {
  const sortBySize = (a, b) => {
    const sizeA = a.width * a.height;
    const sizeB = b.width * b.height;
    return sizeB - sizeA; 
  };
  images.sort(sortBySize);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="headings text-center">{title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="gallery-image">
                      <img
                        src={image.image}
                        alt={image.alt}
                        className="gallery-image-img"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-md-4" key={1}>
                  <div className="gallery-image">
                    <img
                      src={Coverimage}
                      alt="Coverimages"
                      className="gallery-image-img"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
