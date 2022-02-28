import React from 'react';
import  ContentEdit  from './features/content-edit/ContentEdit';
import './App.css';

function App() {
  return (
    <section className="section">
    <div className="container">
        <h1>Cms Admin</h1>
     
      <ContentEdit />
    </div>
    </section>

  );
}

export default App;
