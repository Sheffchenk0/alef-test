import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import styles from './Form.module.css';

export default function Form() {
  return (
    <>
      <div className={styles.title}>Персональные данные</div>
      <div className={styles.input_wrapper}>
        <Input type="text" />
        <div className={styles.placeholder}>Имя</div>
      </div>
      <div className={styles.input_wrapper}>
        <Input type="text" />
        <div className={styles.placeholder}>Возраст</div>
      </div>
      <div className={styles.children__header}>
        <div className={styles.title}>Дети (макс. 5)</div>
        <Button regular>
          <div className={styles.plus}></div>
          Добавить ребёнка
        </Button>
      </div>
      <div className={styles.children}>
        <div className={styles.input_small_wrapper}>
          <Input small />
          <div className={styles.placeholder}>Имя</div>
        </div>
        <div className={styles.input_small_wrapper}>
          <Input type="number" small />
          <div className={styles.placeholder}>Возраст</div>
        </div>
        <div className={styles.delete}>Удалить</div>
      </div>
      <div className={styles.children}>
        <div className={styles.input_small_wrapper}>
          <Input small />
          <div className={styles.placeholder}>Имя</div>
        </div>
        <div className={styles.input_small_wrapper}>
          <Input type="number" small />
          <div className={styles.placeholder}>Возраст</div>
        </div>
        <div className={styles.delete}>Удалить</div>
      </div>
      <div className={styles.submit}>
        <Link to="/preview">
          <Button filled>Сохранить</Button>
        </Link>
      </div>
    </>
  );
}
