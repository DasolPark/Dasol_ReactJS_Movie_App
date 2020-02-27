import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="ui segment header">
      <Link to="/" style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to="/year">Year</Link>
    </div>
  );
};

export default Navigation;
