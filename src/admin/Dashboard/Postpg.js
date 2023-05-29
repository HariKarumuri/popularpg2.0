import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPg } from '../../store/slices/pgSlice';

const PostPg = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth); // Access the access token from the auth state

  const [postData, setPostData] = useState({
    common_areas: '',
    aminities: '',
    rules: '',
    address_locality: '',
    name: '',
    popularity: '',
    featured: '',
    address_building: '',
    beds_count: '',
    gender_type: '',
    working: '',
    meals_available: false,
    notice_period_days: '',
    lock_in_period: '',
    property_manager: '',
    property_owner_stays: false,
    onetime_move_in_charge: '',
    monthly_meals_charges: '',
    monthly_electricity_charges: '',
    additional_info: '',
    images: [],
  });

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.checked });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostData({ ...postData, images: [...postData.images, file] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the postPg action with the postData and accessToken
    dispatch(postPg({ postData, accessToken }))
      .then(() => {
        // Post successful, perform any necessary actions
        console.log('Post Pg successful!');
      })
      .catch((error) => {
        // Post error, handle accordingly
        console.error('Post Pg failed:', error);
      });
  };

  return (
    <div>
      <h2>Post Pg</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Common Areas:
          <input
            type="text"
            name="common_areas"
            value={postData.common_areas}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Amenities:
          <input
            type="text"
            name="aminities"
            value={postData.aminities}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Rules:
          <input
            type="text"
            name="rules"
            value={postData.rules}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Address Locality:
          <input
            type="text"
            name="address_locality"
            value={postData.address_locality}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={postData.name}
            onChange={handleInputChange}
          />
        </label>

        {/* Include other input fields for the remaining data properties */}
        {/* For example:
          <label>
            Popularity:
            <input
              type="number"
              name="popularity"
              value={postData.popularity}
              onChange={handleInputChange}
            />
          </label>
        */}

        <label>
          Meals Available:
          <input
            type="checkbox"
            name="meals_available"
            checked={postData.meals_available}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          Property Owner Stays:
          <input
            type="checkbox"
            name="property_owner_stays"
            checked={postData.property_owner_stays}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          Images:
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostPg;
