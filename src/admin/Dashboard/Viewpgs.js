import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPGs } from '../../store/slices/pgsSlice';
import Cookies from 'js-cookie';
import UpdateModal from './updateModal';
const ViewPGs = () => {
  const dispatch = useDispatch();
  const pgs = useSelector((state) => state.pgs.pgs);
  const isLoading = useSelector((state) => state.pgs.isLoading);
  const error = useSelector((state) => state.pgs.error);
  const [selectedPG, setSelectedPG] = useState(null);
  useEffect(() => {
    dispatch(fetchPGs());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleUpdate = (id) => {
    const selectedPG = pgs.find((pg) => pg.id === id);
    setSelectedPG(selectedPG);
  };

  const handleCloseModal = () => {
    setSelectedPG(null);
  };

  const handleDelete = (id) => {
    const accessToken = Cookies.get('accessToken');
    fetch(`http://127.0.0.1:8000/api/pgs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // Replace with your actual access token
      },
    })
      .then((response) => {
        if (response.ok) {
          // Delete successful, update the UI accordingly
          dispatch(fetchPGs()); // Fetch the updated list of PGs
        } else {
          // Delete failed, handle the error
          throw new Error('Delete failed');
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };
  

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">View PGs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {pgs.map((pg) => (
          <div key={pg.id} className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{pg.name}</h3>
                <h5 className="card-title">ID: {pg.id}</h5>
                <div className="row">
                  <div className="col-6 col-md-4">
                    <p className="card-text">Popularity: {pg.popularity}</p>
                    <p className="card-text">Featured: {pg.featured}</p>
                    <p className="card-text">Gender Type: {pg.gender_type}</p>
                    <p className="card-text">Working: {pg.working}</p>
                    <p className="card-text">Meals Available: {pg.meals_available ? 'Yes' : 'No'}</p>
                    <p className="card-text">Notice Period Days: {pg.notice_period_days}</p>
                  </div>
                  <div className="col-6 col-md-4">
                    <p className="card-text">Lock-in Period: {pg.lock_in_period}</p>
                    <p className="card-text">Property Manager: {pg.property_manager}</p>
                    <p className="card-text">Property Owner Stays: {pg.property_owner_stays ? 'Yes' : 'No'}</p>
                    <p className="card-text">One-time Move-in Charge: {pg.onetime_move_in_charge}</p>
                    <p className="card-text">Monthly Meals Charges: {pg.monthly_meals_charges}</p>
                    <p className="card-text">Monthly Electricity Charges: {pg.monthly_electricity_charges}</p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p className="card-text">Additional Info: {pg.additional_info}</p>
                    <p className="card-text">Address: {pg.address_building}, {pg.address_locality}</p>
                    <p className="card-text">Common Areas: {pg.common_areas.join(', ')}</p>
                    {/* <p className="card-text">Amenities: {pg.amenities.join(', ')}</p> */}
                    <p className="card-text">Beds Count: {pg.beds_count}</p>
                    <p className="card-text">Rules: {pg.rules.join(', ')}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={()=>handleUpdate(pg.id)} >
                 update 
                </button>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => handleDelete(pg.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <UpdateModal pg={selectedPG} handleCloseModal={handleCloseModal}/>
    </div>
  );
};

export default ViewPGs;
