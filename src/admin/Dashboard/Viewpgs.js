import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPGs } from '../../store/slices/pgsSlice';

const ViewPGs = () => {
  const dispatch = useDispatch();
  const pgs = useSelector((state) => state.pgs.pgs);
  const isLoading = useSelector((state) => state.pgs.isLoading);
  const error = useSelector((state) => state.pgs.error);

  useEffect(() => {
    dispatch(fetchPGs());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>View PGs</h2>
      {pgs.map((pg) => (
        <div key={pg.id}>
          <h3>{pg.name}</h3>
          <p>Address: {pg.address_building}, {pg.address_locality}</p>
          <p>Common Areas: {pg.common_areas.join(', ')}</p>
          <p>Amenities: {pg.amenities.join(', ')}</p>
          <p>Rules: {pg.rules.join(', ')}</p>
          <p>Rooms:</p>
          <ul>
            {pg.rooms.map((room) => (
              <li key={room.id}>
                <p>Room ID: {room.id}</p>
                <p>Kind: {room.kind}</p>
                <p>Beds Count: {room.beds_count}</p>
                <p>Rent: {room.rent}</p>
                <p>Security: {room.security}</p>
              </li>
            ))}
          </ul>
          <p>Popularity: {pg.popularity}</p>
          <p>Featured: {pg.featured}</p>
          <p>Gender Type: {pg.gender_type}</p>
          <p>Working: {pg.working}</p>
          <p>Meals Available: {pg.meals_available ? 'Yes' : 'No'}</p>
          <p>Notice Period Days: {pg.notice_period_days}</p>
          <p>Lock-in Period: {pg.lock_in_period}</p>
          <p>Property Manager: {pg.property_manager}</p>
          <p>Property Owner Stays: {pg.property_owner_stays ? 'Yes' : 'No'}</p>
          <p>One-time Move-in Charge: {pg.onetime_move_in_charge}</p>
          <p>Monthly Meals Charges: {pg.monthly_meals_charges}</p>
          <p>Monthly Electricity Charges: {pg.monthly_electricity_charges}</p>
          <p>Additional Info: {pg.additional_info}</p>
          {/* Render other details of the PG */}
        </div>
      ))}
    </div>
  );
};

export default ViewPGs;
