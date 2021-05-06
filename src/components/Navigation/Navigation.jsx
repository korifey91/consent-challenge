import { NavLink, useLocation } from 'react-router-dom';

import { MenuItem, MenuList } from '@material-ui/core';

import styles from './Navigation.module.scss';

const navigationMenuList = [
  {
    to: '/give-consent',
    title: 'Give consent',
  },
  {
    to: '/consents',
    title: 'Collected consents',
  },
];

function Navigation() {
  const location = useLocation();
  return (
    <MenuList className={styles.wrapper}>
      {navigationMenuList.map(({ to, title }) => (
        <MenuItem
          key={to}
          className={styles.menuItem}
          selected={location.pathname === to}
        >
          <NavLink className={styles.link} to={to}>
            {title}
          </NavLink>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default Navigation;
