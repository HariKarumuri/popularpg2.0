import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPg } from '../../store/slices/pgSlice';

const PostPg = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  const [postData, setPostData] = useState({
    common_areas: [''],
    aminities: [''],
    rules: [''],
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
    images: [''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'images') {
      const imageUrls = value.split(',');
      setPostData({ ...postData, [name]: imageUrls });
    }else if (name === "gender_type" || name === "working") {
      setPostData({ ...postData, [name]: value.slice(0, 1) }); // Limit to 1 character
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };
  

  const handleCheckboxChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (
      postData.common_areas.some((area) => area === '') ||
      postData.aminities.some((amenity) => amenity === '') ||
      postData.rules.some((rule) => rule === '') ||
      postData.address_locality === '' ||
      postData.name === '' ||
      postData.popularity === 0 ||
      postData.featured === 0 ||
      postData.address_building === '' ||
      postData.beds_count === 0 ||
      postData.gender_type === '' ||
      postData.working === '' ||
      postData.notice_period_days === 0 ||
      postData.lock_in_period === 0 ||
      postData.property_manager === '' ||
      postData.onetime_move_in_charge === 0 ||
      postData.monthly_meals_charges === 0 ||
      postData.monthly_electricity_charges === 0
    ) {
      alert('Please fill in all the required fields.');
      return;
    }
    dispatch(postPg(postData, accessToken))
      .then(() => {
        console.log('Post Pg successful!');
      })
      .catch((error) => {
        console.error('Post Pg failed:', error);
      });
  };

  return (
    <div className="container">
      <h2>Post Pg</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Common Areas:</label>
          {postData.common_areas.map((area, index) => (
            <input
              key={index}
              type="text"
              className="form-control"
              value={area}
              onChange={(e) => {
                const updatedAreas = [...postData.common_areas];
                updatedAreas[index] = e.target.value;
                setPostData({ ...postData, common_areas: updatedAreas });
              }}
            />
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Amenities:</label>
          {postData.aminities.map((amenity, index) => (
            <input
              key={index}
              type="text"
              className="form-control"
              value={amenity}
              onChange={(e) => {
                const updatedAmenities = [...postData.aminities];
                updatedAmenities[index] = e.target.value;
                setPostData({ ...postData, aminities: updatedAmenities });
              }}
            />
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Rules:</label>
          {postData.rules.map((rule, index) => (
            <input
              key={index}
              type="text"
              className="form-control"
              value={rule}
              onChange={(e) => {
                const updatedRules = [...postData.rules];
                updatedRules[index] = e.target.value;
                setPostData({ ...postData, rules: updatedRules });
              }}
            />
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Address Locality:</label>
          <input
            type="text"
            className="form-control"
            name="address_locality"
            value={postData.address_locality}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={postData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Popularity:</label>
          <input
            type="number"
            className="form-control"
            name="popularity"
            value={postData.popularity}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Featured:</label>
          <input
            type="number"
            className="form-control"
            name="featured"
            value={postData.featured}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address Building:</label>
          <input
            type="text"
            className="form-control"
            name="address_building"
            value={postData.address_building}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Beds Count:</label>
          <input
            type="number"
            className="form-control"
            name="beds_count"
            value={postData.beds_count}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender Type:</label>
          <input
            type="text"
            className="form-control"
            name="gender_type"
            value={postData.gender_type}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Working:</label>
          <input
            type="text"
            className="form-control"
            name="working"
            value={postData.working}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="meals_available"
            checked={postData.meals_available}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label">Meals Available</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Notice Period Days:</label>
          <input
            type="number"
            className="form-control"
            name="notice_period_days"
            value={postData.notice_period_days}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lock-in Period:</label>
          <input
            type="number"
            className="form-control"
            name="lock_in_period"
            value={postData.lock_in_period}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Property Manager:</label>
          <input
            type="text"
            className="form-control"
            name="property_manager"
            value={postData.property_manager}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="property_owner_stays"
            checked={postData.property_owner_stays}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label">Property Owner Stays</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Onetime Move-in Charge:</label>
          <input
            type="number"
            className="form-control"
            name="onetime_move_in_charge"
            value={postData.onetime_move_in_charge}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Monthly Meals Charges:</label>
          <input
            type="number"
            className="form-control"
            name="monthly_meals_charges"
            value={postData.monthly_meals_charges}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Monthly Electricity Charges:</label>
          <input
            type="number"
            className="form-control"
            name="monthly_electricity_charges"
            value={postData.monthly_electricity_charges}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Info:</label>
          <input
            type="text"
            className="form-control"
            name="additional_info"
            value={postData.additional_info}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Images:</label>
          {postData.images.map((image, index) => (
            <input
              key={index}
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => {
                const updatedImages = [...postData.images];
                updatedImages[index] = e.target.value;
                setPostData({ ...postData, images: updatedImages });
              }}
            />
          ))}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostPg;
