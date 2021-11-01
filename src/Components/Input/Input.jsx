import classNames from 'classnames';
import React, { memo } from 'react';
import styles from './Input.module.css';

export default memo(function Input({ small, name, register, ...otherProps }) {
  if (typeof register !== 'function') {
    register = () => {};
  }
  return (
    <input
      type="text"
      className={classNames(styles.input, { [styles.small]: small })}
      {...otherProps}
      {...register(name)}
    />
  );
});
