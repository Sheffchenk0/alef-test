import React, { memo } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default memo(function Header() {
  return (
    <header className={styles.header}>
      <Burger
        items={[
          { value: 'Форма', href: '/' },
          { value: 'Превью', href: '/preview' },
        ]}
      />
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
});
