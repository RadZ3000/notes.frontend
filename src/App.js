import React from 'react';
import './App.css';
import { NotesTable } from './components/NotesTable';

const App = () => {
  console.log('test');
  return (
    <div className="App">
      <h3>My Notes</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <NotesTable />
      </div>
    </div>
  );
}

export default App;
