import React from 'react';
import styles from './Preview.module.css';

export default function Preview() {
  return (
    <>
      <div className={styles.title}>Персональные данные</div>
      <div className={styles.bold}>Василий, 30 лет</div>
      <div className={styles.cards}>
        <div className={styles.title}>Дети</div>
        <div className={styles.card}>Петр, 10 лет</div>
        <div className={styles.card}>Василий, 14 лет</div>
      </div>
    </>
  );
}
