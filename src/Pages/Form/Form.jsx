import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '../../Components/Button/Button';
import Child from '../../Components/Child/Child';
import Input from '../../Components/Input/Input';
import { saveData } from '../../redux/reducers';
import styles from './Form.module.css';
import { Redirect } from 'react-router';
export default function Form() {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  const watchParent = watch();
  const [children, setChildren] = useState([{ id: 0 }]);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (id, data) => {
    setChildren((children) => {
      return [...children].map((el) => {
        if (el.id === id) {
          return { id, data };
        }
        return el;
      });
    });
  };
  const onSubmit = () => {
    if (watchParent.name && watchParent.age) {
      for (let index = 0; index < children.length; index++) {
        const element = children[index];
        if (!element.data?.name || !element.data?.age) {
          setError('Заполните данные полностью');
          return;
        }
        dispatch(saveData(watchParent, children));
        setRedirect(true);
        return;
      }
    }
    setError('Заполните данные полностью');
  };
  const onAdd = () => {
    setChildren((children) => {
      return [
        ...children,
        { id: children[children.length - 1].id + 1, data: { name: '', age: '' } },
      ];
    });
  };
  const onDelete = (id) => {
    if (children.length <= 1) {
      return;
    }
    setChildren((state) => {
      setChildren([...state].filter((el) => el && el.id !== id));
    });
  };
  return (
    <>
      {redirect && <Redirect to="/preview" />}
      <div className={styles.title}>Персональные данные</div>
      <div className={styles.input_wrapper}>
        <Input type="text" name="name" register={register} />
        <div className={styles.placeholder}>Имя</div>
      </div>
      <div className={styles.input_wrapper}>
        <Input type="text" name="age" register={register} />
        <div className={styles.placeholder}>Возраст</div>
      </div>
      <div className={styles.children__header}>
        <div className={styles.title}>Дети (макс. 5)</div>
        <Button regular onClick={onAdd}>
          <div className={styles.plus}></div>
          Добавить ребёнка
        </Button>
      </div>
      {children?.length &&
        children.map((el) => {
          return <Child onDelete={onDelete} onChange={onChange} key={el.id} id={el.id} />;
        })}
      <div to="/preview" className={styles.submit} onClick={onSubmit}>
        <Button filled>Сохранить</Button>
        {<div className={styles.error}>{error}</div>}
      </div>
    </>
  );
}
