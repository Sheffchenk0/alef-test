import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ header, items, active, setMenuActive, onClick }) => {
  if (active) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return (
    <div
      className={classNames(styles.menu, { [styles.active]: active })}
      onClick={() => setMenuActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>{header}</div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={onClick}>
                <Link to={item.href}>{item.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Menu);
