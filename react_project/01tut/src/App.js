import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Bob", "Kekin", "Dave", "Mark"];
    const int = Math.floor(Math.random() * 4);
    console.log(int);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {handleNameChange()}!</h1>
      </header>
    </div>
  );
}

export default App;
