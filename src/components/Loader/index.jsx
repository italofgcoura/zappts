import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ loading }) {
  if (!loading) return null;

  return ReactDOM.createPortal(
    <Overlay><Spinner size={90} /></Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
