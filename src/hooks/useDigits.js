import { useState } from 'react';

const initialState = Array(4).fill('');

function hasDuplicates(digits) {
  const dejaVu = {};
  for (const digit of digits) {
    if (digit !== '') {
      if (digit in dejaVu) {
        return true;
      } else {
        dejaVu[digit] = true;
      }
    }
  }
  return false;
}

export default function useDigits() {
  const [digits, setDigits] = useState(initialState);

  // TODO useCallback?
  const setDigitAt = (digit, index) => {
    const nextDigits = digits.slice(0);
    nextDigits[index] = digit;
    setDigits(nextDigits);
  };

  const validateDigits = () => {
    if (hasDuplicates(digits)) {
      return { valid: false, msg: 'Each digit should be unique.' };
    }

    if (digits.some(v => v === '')) {
      return { valid: false, msg: '' };
    }

    return { valid: true, msg: '' };
  };

  const resetDigits = () => setDigits(initialState);

  return [digits, setDigitAt, validateDigits(), resetDigits];
}
