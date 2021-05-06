import PropTypes from 'prop-types';

import styles from './PageLayout.module.scss';

function PageLayout({ children }) {
  return <div className={styles.pageLayout}>{children}</div>;
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageLayout;
