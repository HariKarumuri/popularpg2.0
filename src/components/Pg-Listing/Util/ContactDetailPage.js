import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactDetailsPage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      // Make a POST request to send the contact details
      const response = await axios.post("https://popularpg.in/booking/", {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        product: id, // Assuming 'id' is the product ID from the URL parameter
      });

      if (response.status === 201) {
        console.log("Contact details submitted successfully");
        // Reset the form after successful submission
        setName("");
        setEmail("");
        setPhone("");
         setShowAlert(true);

        // Hide the alert after 3 seconds (adjust as needed)
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        console.error("Failed to submit contact details");
      }
    } catch (error) {
      console.error(
        "An error occurred while submitting contact details",
        error
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
    {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Form submitted successfully!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <h1>Contact Information</h1>
      <p className="text-muted fs-6"> PropertyId : {id} </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="text"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactDetailsPage;
