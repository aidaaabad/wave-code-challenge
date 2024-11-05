import React from 'react';
import logo from './logo.jpeg';
import './App.css';
import CustomerListPage from './pages/customerListPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img  className={'App-logo'} src={logo} />
        <p>
          Wave Code Challenge
        </p>

      </header>
      <CustomerListPage />
    </div>
  );
}

export default App;
