import React from 'react';

import PropTypes from 'prop-types';

import { StyledType } from './styles';

function Type({ name }) {
  return (
    <StyledType><p>{name}</p></StyledType>
  );
}

export default Type;

Type.propTypes = {
  name: PropTypes.string.isRequired,
};
