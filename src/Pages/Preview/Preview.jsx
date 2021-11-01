import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Card from '../../Components/Card/Card';
import styles from './Preview.module.css';

export default function Preview() {
  const { name, age, children } = useSelector((state) => ({
    name: state.parent?.name,
    age: state.parent?.age,
    children: state.children,
  }));
  return (
    <>
      {((children.length === 0 || name === undefined || age === undefined) && (
        <Redirect to="/" />
      )) || (
        <>
          <div className={styles.title}>Персональные данные</div>
          <div className={styles.bold}>
            {name}, {age} лет
          </div>
          <div className={styles.cards}>
            {children.length > 0 &&
              children.map((el) => {
                return (
                  <Card key={el.id} className={styles.card} age={el.data.age} name={el.data.name} />
                );
              })}
          </div>
        </>
      )}
    </>
  );
}
