import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.css';

export default function Button({ regular, filled, children, ...otherProps }) {
  return (
    <button
      className={classNames(styles.button, { [styles.regular]: regular, [styles.filled]: filled })}
      {...otherProps}>
      {children}
    </button>
  );
}
