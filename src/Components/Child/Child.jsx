import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import styles from './Child.module.css';

export default memo(function Child({ id, onChange, onDelete }) {
  const { register, watch } = useForm();
  const watchAllFields = watch();
  useEffect(() => {
    onChange(id, watchAllFields);
  }, [watchAllFields.name, watchAllFields.age]);
  return (
    <div className={styles.child}>
      <div className={styles.input_small_wrapper}>
        <Input name={'name'} register={register} small />
        <div className={styles.placeholder}>Имя</div>
      </div>
      <div className={styles.input_small_wrapper}>
        <Input name={'age'} register={register} type="number" small />
        <div className={styles.placeholder}>Возраст</div>
      </div>
      <div onClick={() => onDelete(id)} className={styles.delete}>
        Удалить
      </div>
    </div>
  );
});
