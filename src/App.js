import css from './App.module.css';
import React from 'react';
import Login from './components/Login/Login';

function App() {
  return (
    <div className={css.root}>
      <main className={css.main}>
        <Login></Login>
      </main>
    </div>
  );
}

export default App;
