import "./App.css";
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Backyard Burbs</p>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
