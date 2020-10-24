import React from 'react';
import ContactList from './contacts/ContactList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="w-full ustify-items-center pt-12 pb-6">
        <ContactList></ContactList>
      </div>
      </header>
    </div>
  );
}

export default App;
