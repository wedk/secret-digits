import React from 'react';

import styles from './Boardgame.module.css';

import AttemptResult from './AttemptResult';
import InputForm from './InputForm';
import SuccessPanel from './SuccessPanel';

import useAttempts from '../hooks/useAttempts';
import useSecretDigits from '../hooks/useSecretDigits';

export default function Boardgame() {
  const [secretDigits, computeNextSecretDigits] = useSecretDigits();
  const [attempts, addAttempt, resetAttempts] = useAttempts();

  // TODO only testing the last attempts should be sufficient
  const found = attempts.indexOf(secretDigits) !== -1;

  function handleRestart() {
    computeNextSecretDigits();
    resetAttempts();
  }

  let content;
  if (found) {
    content = (
      <SuccessPanel
        secretDigits={secretDigits}
        nbAttempts={attempts.length}
        onRestart={handleRestart}
      />
    );
  } else {
    content = (
      <>
        <table className={styles.attempts} hidden={!attempts.length}>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Attempts</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{attempt}</td>
                <td>
                  <AttemptResult
                    attempt={attempt}
                    secretDigits={secretDigits}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <InputForm onSubmit={addAttempt} />
      </>
    );
  }

  return <section>{content}</section>;
}
