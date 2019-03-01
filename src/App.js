import React from 'react';

import styles from './App.module.css';
import github from './images/github.png';

import Introduction from './components/Introduction';
import Boardgame from './components/Boardgame';

const currentYear = new Date().getFullYear();

export default function App() {
  return (
    <main className={styles.app}>
      <header>
        <h1>
          secret&middot;digits
          <small>bulls and cows</small>
        </h1>
        <Introduction />
      </header>
      <Boardgame />
      <footer>
        Copyright &copy; {currentYear} wed
        <a
          href="https://github.com/wedk/secret-digits"
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
        >
          <img
            src={github}
            className={styles.github}
            width="18"
            height="18"
            alt="GitHub logo"
          />
        </a>
      </footer>
    </main>
  );
}
