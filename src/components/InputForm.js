import React from 'react';

import styles from './InputForm.module.css';

import DigitInput from './DigitInput';
import useDigits from '../hooks/useDigits';

export default function InputForm({ onSubmit }) {
  const [digits, setDigitAt, validation, resetDigits] = useDigits();
  const refs = React.useRef(digits.map(React.createRef)); // cf. https://stackoverflow.com/questions/54633690/

  // autofocus the first digit input on initial render
  React.useEffect(() => {
    refs.current[0].current.focus();
  }, []);

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit(digits.join(''));
    resetDigits();
    refs.current[0].current.focus();
    refs.current[0].current.scrollIntoView();
  }

  function handleTransfertFocus(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < digits.length) {
      refs.current[targetIndex].current.focus();
    }
  }

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        {digits.map((value, index) => (
          <DigitInput
            key={index}
            ref={refs.current[index]}
            value={value}
            onChange={value => setDigitAt(value, index)}
            onYieldFocus={direction => handleTransfertFocus(index, direction)}
          />
        ))}
      </fieldset>
      <button
        type="submit"
        className={styles.button}
        title="Validate"
        disabled={!validation.valid}
        onClick={handleSubmit}
      >
        &#8679;
      </button>
      <p className={styles.error}>{validation.msg}&nbsp;</p>
    </form>
  );
}
