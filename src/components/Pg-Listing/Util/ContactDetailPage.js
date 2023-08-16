import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactDetailsPage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

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
    <div>
      <h1>Contact Information</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactDetailsPage;
