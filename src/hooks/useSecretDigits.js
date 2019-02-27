import { useState, useDebugValue } from 'react';

export default function useSecretDigits() {
  let [secretDigits, setSecretDigits] = useState(null);

  function computeNextSecretDigits() {
    let nextSecretDigits = '';
    while (nextSecretDigits.length < 4) {
      const candidate = Math.floor(Math.random() * 10);
      if (nextSecretDigits.indexOf(candidate) === -1) {
        nextSecretDigits += '' + candidate;
      }
    }
    setSecretDigits(nextSecretDigits);
    return nextSecretDigits;
  }

  // initial secret digits
  if (secretDigits === null) {
    secretDigits = computeNextSecretDigits();
  }

  // reveal secret digits in React DevTools
  useDebugValue(secretDigits);

  return [secretDigits, computeNextSecretDigits];
}
