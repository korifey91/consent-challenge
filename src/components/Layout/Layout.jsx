import PropTypes from 'prop-types';

import styles from './Layout.module.scss';

function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
