import React, { memo, useState } from 'react';
import Menu from './Menu/Menu';
import styles from './Burger.module.css';

const Burger = ({ items }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className={styles.btn} onClick={() => setMenuActive((bool) => !bool)}>
        <span />
      </div>
      <Menu
        onClick={() => setMenuActive((bool) => !bool)}
        active={menuActive}
        setMenuActive={setMenuActive}
        header="Меню"
        items={items}
      />
    </>
  );
};

export default memo(Burger);
