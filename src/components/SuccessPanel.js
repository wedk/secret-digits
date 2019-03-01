import React from 'react';

import styles from './SuccessPanel.module.css';

export default function SuccessPanel({ secretDigits, nbAttempts, onRestart }) {
  const btnRef = React.useRef();

  // autofocus the restart button on initial render
  React.useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <article>
      <div className={styles.commands}>
        <button
          ref={btnRef}
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
