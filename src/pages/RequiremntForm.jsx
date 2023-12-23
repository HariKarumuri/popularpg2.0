import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../util/useAxios";

const RequirementForm = () => {
  const api = useAxios();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_number: "",
    looking_for: "",
    room_type_preference: "",
    preferred_move_in_date: "",
    preferred_location: "",
    acknowledge_info_accuracy: false,
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "https://popularpg.in/api/create-accommodation-preferences/",
        formData
      );

      if (response.status === 201) {
        setSubmitSuccess(true);

        setFormData({
          full_name: "",
          whatsapp_number: "",
          looking_for: "",
          room_type_preference: "",
          preferred_move_in_date: "",
          preferred_location: "",
          acknowledge_info_accuracy: false,
        });

        // Wait for a moment and then reset success state
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);

      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      // Handle form submission failure here, e.g., display an error message.
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                Accommodation Preferences
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    id="full_name"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="whatsapp_number" className="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="whatsapp_number"
                    className="form-control"
                    id="whatsapp_number"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="looking_for" className="form-label">
                    Looking For
                  </label>
                  <select
                    name="looking_for"
                    className="form-select"
                    id="looking_for"
                    value={formData.looking_for}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Girls PG">Girls PG</option>
                    <option value="Boys PG">Boys PG</option>
                    <option value="Unisex PG">Unisex PG</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="room_type_preference" className="form-label">
                    Room Type Preference
                  </label>
                  <select
                    name="room_type_preference"
                    className="form-select"
                    id="room_type_preference"
                    value={formData.room_type_preference}
                    onChange={handleChange}

                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Single Sharing">Single Sharing</option>
                    <option value="2 Sharing">2 Sharing</option>
                    <option value="3 Sharing">3 Sharing</option>
                    <option value="4 Sharing">4 Sharing</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="preferred_move_in_date"
                    className="form-label"
                  >
                    Preferred Move-in Date
                  </label>
                  <input
                    type="date"
                    name="preferred_move_in_date"
                    className="form-control"
                    id="preferred_move_in_date"
                    value={formData.preferred_move_in_date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="preferred_location" className="form-label">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    name="preferred_location"
                    className="form-control"
                    id="preferred_location"
                    placeholder="Enter your preferred location"
                    value={formData.preferred_location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acknowledge_info_accuracy"
                    name="acknowledge_info_accuracy"
                    checked={formData.acknowledge_info_accuracy}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="acknowledge_info_accuracy"
                  >
                    I acknowledge the accuracy of the information provided.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>

                {submitSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Accommodation preferences submitted successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementForm;
