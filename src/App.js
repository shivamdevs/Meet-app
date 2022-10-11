import css from './App.module.css';
import React from 'react';
import Auth from './components/Account/Auth';

function App() {
  return (
    <div className={css.root}>
      <main className={css.main}>
        <Auth></Auth>
      </main>
    </div>
  );
}

export default App;
