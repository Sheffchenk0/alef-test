import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Header() {
  return (
    <header className={styles.header}>
      <Burger
        items={[
          { value: 'Форма', href: '/' },
          { value: 'Превью', href: '/preview' },
        ]}
      />
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      {/* <nav className={styles.nav}>
        <Link to="/" className={styles.item}>
          Форма
        </Link>
        <Link to="/preview" className={styles.item}>
          Превью
        </Link>
      </nav> */}
    </header>
  );
}
