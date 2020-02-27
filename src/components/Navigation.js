import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav ui container header">
      <Link to="/">Top rated</Link>
      <Link to="/year">Latest</Link>
    </div>
  );
};

export default Navigation;
