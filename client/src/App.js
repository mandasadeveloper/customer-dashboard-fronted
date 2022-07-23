import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const Shop_name = "electronicbiz.myshopify.com";
  React.useEffect(() => {
    fetch(`https://0e67-2401-4900-1c08-17d-de6-ac59-b190-dc2b.in.ngrok.io/api/get-customers?shop=electronicbiz.myshopify.com`).then((res)=>console.log(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
