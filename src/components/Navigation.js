import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav ui container header">
      <Link to="/">Home</Link>
      <Link to="/year">Year</Link>
    </div>
  );
};

export default Navigation;
