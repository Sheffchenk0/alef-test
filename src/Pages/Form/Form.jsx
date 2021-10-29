import classNames from 'classnames';
import React from 'react';
import styles from './Form.module.css';

export default function Form() {
  return (
    <>
      <div className={styles.title}>Персональные данные</div>
      <div className={styles.input_wrapper}>
        <input className={styles.input} type="text" />
        <div className={styles.placeholder}>Имя</div>
      </div>
      <div className={styles.input_wrapper}>
        <input className={styles.input} type="text" />
        <div className={styles.placeholder}>Возраст</div>
      </div>
      <div className={styles.children__header}>
        <div className={styles.title}>Дети (макс. 5)</div>
        <button className={classNames(styles.button, styles.button_regular)}>
          <div className={styles.plus}></div>
          <span>Добавить ребёнка</span>
        </button>
      </div>
    </>
  );
}
