import React from 'react';

import styles from './DigitInput.module.css';

export default React.forwardRef(function DigitInput({ value, onChange, onYieldFocus }, ref) {
  const [lastKeyCode, setLastKeyCode] = React.useState(null);

  function handleKeyDown(ev) {
    // was already empty and hitting Backspace
    if (value === '' && ev.keyCode === 8) {
      onYieldFocus(-1);
    }
    setLastKeyCode(ev.keyCode);
  }

  function handleChange(ev) {
    // input of type number is not always reliable, especially on mobile devices
    const digit = parseInt(ev.target.value.trim().substr(0, 1), 10);
    if (isNaN(digit)) {
      onChange('');
    } else {
      onChange(digit);
      // transfer focus if the value wasn't spinned using arrow keys (ArrowUp, ArrowDown)
      if (lastKeyCode !== 38 && lastKeyCode !== 40) {
        onYieldFocus(1);
      }
    }
  }

  return (
    <input
      ref={ref}
      type="number"
      min="0"
      max="9"
      required
      className={styles.digit}
      value={value}
      onClick={() => ref.current.select()}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
});
