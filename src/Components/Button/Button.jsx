import classNames from 'classnames';
import React, { memo } from 'react';
import styles from './Button.module.css';

export default memo(function Button({ regular, filled, children, ...otherProps }) {
  return (
    <button
      className={classNames(styles.button, { [styles.regular]: regular, [styles.filled]: filled })}
      {...otherProps}>
      {children}
    </button>
  );
});
