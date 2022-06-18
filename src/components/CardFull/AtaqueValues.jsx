import React from 'react';

import { PropTypes } from 'prop-types';

import ProgressBar from './ProgressBar';

import { AtaqueValuesContainer } from './styles';

function AtaqueValues({ type, value, color, maxValue }) {
  console.log('type, value, color', type, value, color);

  return (
    <AtaqueValuesContainer>
      <span>{type}</span>
      {' '}
      <span>{value}</span>
      {' '}
      <ProgressBar value={value} color={color} maxValue={maxValue} />
    </AtaqueValuesContainer>
  );
}

export default AtaqueValues;

AtaqueValues.defaultProps = {
  value: 0,
};

AtaqueValues.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  color: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
};
