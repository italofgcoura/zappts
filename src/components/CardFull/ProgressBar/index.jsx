import React from 'react';

import PropTypes from 'prop-types';

function ProgressBar({ value, color }) {
  const containerStyles = {
    height: 4,
    maxWidth: '100%',
    width: '100%',
    backgroundColor: '#F7F5F4',
    borderRadius: 50,
    transition: '0.3s',
  };

  const fillerStyles = {
    height: '100%',
    width: `${value}%`,
    maxWidth: '100%',
    backgroundColor: `${color}`,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: '0.3s',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
