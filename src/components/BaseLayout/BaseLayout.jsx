import PropTypes from 'prop-types';

import styles from './BaseLayout.module.scss';

function BaseLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseLayout;
