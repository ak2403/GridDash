import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom';

import NavigationBar from './navigation_bar';

export default function Navigation() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

Navigation.propTypes = {
  config: PropTypes.array,
};
