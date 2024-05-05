import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleGetName = () => {
    const names = ["sid", "john", "jane", "doe"];
    return names[1];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello to {handleGetName()}</p>
      </header>
    </div>
  );
}

export default App;
