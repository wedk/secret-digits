import React from 'react';

import styles from './DigitInput.module.css';

const CHAR_KEYS = [
  8, // Backspace
  9, // Tab
  13, // Enter
  37, // ArrowLeft
  38, // ArrowUp
  39, // ArrowRight
  40, // ArrowDown
  46, // Delete
  35, // End
  36 // Home
];

// React seems to not work properly with input of type="number"
export default React.forwardRef(function DigitInput({ value, onChange }, ref) {
  function handleKeyDown(ev) {
    if (CHAR_KEYS.includes(ev.keyCode)) {
      return;
    }
    if ('0123456789'.indexOf(ev.key) === -1) {
      ev.preventDefault();
    }
  }

  return (
    <input
      ref={ref}
      type="text"
      maxLength="1"
      required
      className={styles.digit}
      value={value}
      onClick={() => ref.current.select()}
      onKeyDown={handleKeyDown}
      onChange={onChange}
    />
  );
});
