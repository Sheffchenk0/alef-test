import React, { memo } from 'react';
import styles from './Footer.module.css';

export default memo(function Footer() {
  return (
    <div className={styles.footer}>
      <div className="text">all rights reserved</div>
    </div>
  );
});
