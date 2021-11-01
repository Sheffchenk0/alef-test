import React from 'react';
import styles from './Card.module.css';

export default function Card({ name, age }) {
  return (
    <div className={styles.card}>
      {name}, {age} лет
    </div>
  );
}
