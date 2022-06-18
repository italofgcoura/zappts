import React from 'react';
import PropTypes from 'prop-types';
import { DimensionsItemComponent, Infos } from './styles';

import { ReactComponent as WeightBalance } from '../../assets/images/weightbalance.svg';

import { ReactComponent as Scale } from '../../assets/images/scale.svg';

function DimensionsItem({ info, title }) {
  return (
    <DimensionsItemComponent>
      <Infos>
        {title === 'Peso' && <WeightBalance />}
        {title === 'Altura' && <Scale />}
        <span className="info">{info}</span>
      </Infos>
      <span className="title">{title}</span>
    </DimensionsItemComponent>
  );
}

export default DimensionsItem;

DimensionsItem.propTypes = {
  info: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
