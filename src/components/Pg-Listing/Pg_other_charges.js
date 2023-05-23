import React from "react";

const PgOtherCharges = () => {
  return (
    <div id="PgOtherCharges">
      <div className="card mb-3 mx-auto  responsiveness">
        <h4 className="name mr-2 mx-2 text-dark">Other Charges</h4>
        <div className="nodisplayflex mx-3 ">
          <div className="m-2 mx-5  smallScreenRes">
            <div className="d-flex justify-content-center fs-3">
              <ion-icon name="wallet-outline"></ion-icon>
            </div>
            <span className="fs-6 fw-normal">Deposits</span>
            <span className="fs-6 fw-light">Rs 12000 (Refundable)</span>
          </div>

          <div className="m-2 mx-5 smallScreenRes">
            <div className="d-flex justify-content-center fs-3">
              <img
                alt="icon"
                className="img-fluid"
                style={{ height: "40px" }}
                src="https://i.postimg.cc/rwgj6md3/laundry.png"
              />
            </div>
            <span className="fs-6 fw-normal">Laundry</span>
          </div>
          <div className="m-2 mx-5 smallScreenRes">
            <div className="d-flex justify-content-center fs-3">
              <ion-icon name="barbell-outline"></ion-icon>
            </div>
            <span className="fs-6 fw-normal">Gym</span>
            <span className="fs-6 fw-light">Rs 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgOtherCharges;
