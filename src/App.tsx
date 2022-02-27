import React from 'react';
import logo from './logo.svg';
import  ContentEdit  from './features/content-edit/ContentEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cms Admin</h1>
      </header>
      <ContentEdit />
    </div>
  );
}

export default App;
