import PropTypes from 'prop-types';

import useNavigationData from '../../hooks/useNavigationData';

import PropModal from '../../elements/prop_modal';

import { NavBar, Nav } from './index.styles';

export default function NavigationBar() {
  const [navigation] = useNavigationData();

  const validItems = navigation.filter(({ title }) => title);

  return (
    <NavBar>
      {validItems.map((item, index) => (
        <Nav key={index}>{item.title}</Nav>
      ))}

      <PropModal which="navigation" position="bottom" />
    </NavBar>
  );
}

NavigationBar.propTypes = {
  items: PropTypes.array,
};
