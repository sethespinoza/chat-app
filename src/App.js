import './App.css';

function App() {
  return (
    <div className="chat-container">
      <aside className="sidebar">Users</aside>
      <main className="chat-main">
        <div className="messages">Hello!</div>
        <div className="new-message">
          <input type="text" placeholder="type a message..." />
          </div>
      </main>
    </div>
      
  
  );
}

export default App;
