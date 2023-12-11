import React, { useContext, useState } from "react";
import profilePic from "../../assets/images/profilepic.jpg";
import { Link } from "react-router-dom";
import AuthContext from './../../context/AuthContext';


const ProfileDashboard = () => {
  let {user} = useContext(AuthContext) 
  return (
    <div className="container profile-dashboard mt-4">
      <div className="profile-header mb-4 d-flex align-items-center">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-circle mr-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <h4>User Name : {user.username}</h4>
          <h4>Tentant Id:</h4>
        </div>
      </div>

      <div className="row profile-details">
        <div className="col-md-6 personal-info">
          <h3>Personal Information</h3>

          <div className="mb-3 p-1">
            <strong>Email:</strong>
            <div className="d-flex align-items-center ">
              <span className="mx-2 ">user@example.com</span>
              <button className="btn btn-link btn-sm">Edit</button>
            </div>
          </div>

          <div className="mb-3 p-1">
            <strong>Phone Number:</strong>
            <div className="d-flex align-items-center">
              <span className="mx-2">123-456-7890</span>
              <button className="btn btn-link btn-sm">Edit</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 activity-feed">
          <h3>Activity Feed</h3>

          <div>
            <strong>Room Number:</strong> 101
          </div>

          <div>
            <strong>Bed Number:</strong> B
          </div>

          <div>
            <strong>PG ID:</strong> 3001_Dozo_Electronic
          </div>

          <div>
            <strong>PG Location:</strong> electronic city
          </div>

          <div>
            <strong>Monthly Rent:</strong> 8500
          </div>
        </div>
      </div>

      <div className="profile-actions mt-4">
        <h3>My Store</h3>

        <div className="row">
          <div className="col-md-3">
            <Link to="/hospital" className="store-block">
              <h4>Hospital</h4>
              {/* Add an icon or image for the hospital block */}
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/food" className="store-block">
              <h4>Food</h4>
              {/* Add an icon or image for the food block */}
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/bike" className="store-block">
              <h4>Bike</h4>
              {/* Add an icon or image for the bike block */}
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/clothing" className="store-block">
              <h4>Clothing</h4>
              {/* Add an icon or image for the clothing block */}
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ProfileDashboard;
