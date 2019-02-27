import React from 'react';

import styles from './SuccessPanel.module.css';

export default function SuccessPanel({ secretDigits, nbAttempts, onRestart }) {
  return (
    <article>
      <div className={styles.commands}>
        <button
          type="button"
          onClick={onRestart}
          className={styles.button}
          title="Restart"
        >
          &#8634;
        </button>
      </div>
      <h1>Well done!</h1>
      <p>
        You have found the secret digits:{' '}
        <strong className={styles.digits}>{secretDigits}</strong><br />
        within <strong>{nbAttempts}</strong> attempts
      </p>
    </article>
  );
}
