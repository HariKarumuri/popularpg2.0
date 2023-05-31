import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const UpdateModal = ({ pg, handleCloseModal }) => {
  const [updatedData, setUpdatedData] = useState({
    common_areas: [],
    aminities: [],
    rules: [],
    address_locality: '',
    name: '',
    popularity: 0,
    featured: 0,
    address_building: '',
    beds_count: 0,
    gender_type: '',
    working: '',
    meals_available: true,
    notice_period_days: 0,
    lock_in_period: 0,
    property_manager: '',
    property_owner_stays: true,
    onetime_move_in_charge: 0,
    monthly_meals_charges: 0,
    monthly_electricity_charges: 0,
    additional_info: '',
    images: [],
  });

  // Rest of the code remains the same...


  useEffect(() => {
    if (pg !== null) {
      setUpdatedData({
        additional_info: pg.additional_info,
        address_building: pg.address_building,
        address_locality: pg.address_locality,
        beds_count: pg.beds_count,
        common_areas: pg.common_areas,
        featured: pg.featured,
        gender_type: pg.gender_type,
        id: pg.id,
        lock_in_period: pg.lock_in_period,
        meals_available: pg.meals_available,
        monthly_electricity_charges: pg.monthly_electricity_charges,
        monthly_meals_charges: pg.monthly_meals_charges,
        name: pg.name,
        notice_period_days: pg.notice_period_days,
        onetime_move_in_charge: pg.onetime_move_in_charge,
        popularity: pg.popularity,
        property_manager: pg.property_manager,
        property_owner_stays: pg.property_owner_stays,
        rules: pg.rules.join,
        aminities: pg.aminities,
        images: pg.images.join,
        working: pg.working,
      });
    }
  }, [pg]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name === "common_areas" || name === "aminities" || name === "images" || name === "rules") {
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value.split(","),
      }));
    } else {
      setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/pgs/${pg.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        alert('PG updated successfully!');
        handleCloseModal();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Update failed');
      }
    } catch (error) {
      alert('Error while updating the PG: ' + error.message);
    }
  };
  

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Update Details for ID: {pg && pg.id}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="address_building" className="form-label">
                  Address Building
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_building"
                  name="address_building"
                  value={updatedData.address_building}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address_locality" className="form-label">
                  Address Locality
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_locality"
                  name="address_locality"
                  value={updatedData.address_locality}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="additional_info" className="form-label">
                  Additional Info
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="additional_info"
                  name="additional_info"
                  value={updatedData.additional_info}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="beds_count" className="form-label">
                  Beds Count
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="beds_count"
                  name="beds_count"
                  value={updatedData.beds_count}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="common_areas" className="form-label">
                  Common Areas
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="common_areas"
                  name="common_areas"
                  value={updatedData.common_areas}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="featured" className="form-label">
                  Featured
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="featured"
                  name="featured"
                  value={updatedData.featured}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender_type" className="form-label">
                  Gender Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gender_type"
                  name="gender_type"
                  value={updatedData.gender_type}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lock_in_period" className="form-label">
                  Lock-in Period
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="lock_in_period"
                  name="lock_in_period"
                  value={updatedData.lock_in_period}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="meals_available" className="form-label">
                  Meals Available
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="meals_available"
                  name="meals_available"
                  checked={updatedData.meals_available}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="monthly_electricity_charges" className="form-label">
                  Monthly Electricity Charges
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="monthly_electricity_charges"
                  name="monthly_electricity_charges"
                  value={updatedData.monthly_electricity_charges}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="monthly_meals_charges" className="form-label">
                  Monthly Meals Charges
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="monthly_meals_charges"
                  name="monthly_meals_charges"
                  value={updatedData.monthly_meals_charges}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={updatedData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="notice_period_days" className="form-label">
                  Notice Period (Days)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="notice_period_days"
                  name="notice_period_days"
                  value={updatedData.notice_period_days}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="onetime_move_in_charge" className="form-label">
                  One-time Move-in Charge
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="onetime_move_in_charge"
                  name="onetime_move_in_charge"
                  value={updatedData.onetime_move_in_charge}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="popularity" className="form-label">
                  Popularity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="popularity"
                  name="popularity"
                  value={updatedData.popularity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="property_manager" className="form-label">
                  Property Manager
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="property_manager"
                  name="property_manager"
                  value={updatedData.property_manager}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="property_owner_stays" className="form-label">
                  Property Owner Stays
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="property_owner_stays"
                  name="property_owner_stays"
                  checked={updatedData.property_owner_stays}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rules" className="form-label">
                  Rules
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rules"
                  name="rules"
                  value={updatedData.rules}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="working" className="form-label">
                  Working
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="working"
                  name="working"
                  value={updatedData.working}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
  <label htmlFor="common_areas" className="form-label">
    Common Areas
  </label>
  <input
    type="text"
    className="form-control"
    id="common_areas"
    name="common_areas"
    value={updatedData.common_areas.join(", ")}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="rules" className="form-label">
    Rules
  </label>
  <input
    type="text"
    className="form-control"
    id="rules"
    name="rules"
    value={updatedData.rules}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="aminities" className="form-label">
    Amenities
  </label>
  <input
    type="text"
    className="form-control"
    id="aminities"
    name="aminities"
    value={updatedData.aminities.join(", ")}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="images" className="form-label">
    Images
  </label>
  <input
    type="text"
    className="form-control"
    id="images"
    name="images"
    value={updatedData.images}
    onChange={handleChange}
  />
</div>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
