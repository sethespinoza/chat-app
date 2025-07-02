import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MessagesList from './components/MessagesList';
import AddMessage from './components/AddMessage';


function App() {
  return (
    <div className="chat-container">
      <Sidebar />
      <main className="chat-main">
        <MessagesList />
        <div className="new-message">
          <AddMessage />
          </div>
      </main>
    </div>
      
  
  );
}

export default App;
