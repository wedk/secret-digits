import React from 'react';

export default function Result({ attempt, secretDigits }) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < attempt.length; i++) {
    if (attempt[i] === secretDigits[i]) {
      bulls++;
    } else {
      if (secretDigits.indexOf(attempt[i]) !== -1) {
        cows++;
      }
    }
  }

  return (
    <span>
      {bulls}&times;&#9733; {cows}&times;&#9734;
    </span>
  );
}
