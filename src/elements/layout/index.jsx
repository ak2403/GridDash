import PropTypes from 'prop-types';

import { Container } from './index.styles';

export default function Layout({ children = null, theme = 'default' }) {
  return <Container theme={theme}>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
