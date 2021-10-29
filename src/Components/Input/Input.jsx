import classNames from 'classnames';
import React from 'react';
import styles from './Input.module.css';

export default function Input({ small, ...otherProps }) {
  return (
    <input
      type="text"
      className={classNames(styles.input, { [styles.small]: small })}
      {...otherProps}
    />
  );
}
