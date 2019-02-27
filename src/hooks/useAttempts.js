import { useState, useCallback } from 'react';

export default function useAttempts() {
  const [attempts, setAttempts] = useState([]);

  const addAttempt = useCallback(digits =>
    setAttempts(attempts.concat([digits]))
  );

  const resetAttempts = useCallback(() => setAttempts([]));

  return [attempts, addAttempt, resetAttempts];
}
