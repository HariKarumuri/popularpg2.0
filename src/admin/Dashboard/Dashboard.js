import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      console.log('User is authorized');
    }
  }, [user]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard/postpg">Post Pages</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/viewpgs">View Pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
