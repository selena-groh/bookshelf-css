import "./App.scss";
import Bookshelf from "./Bookshelf";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">2023 Bookshelf</h1>
      {/* <p className="App-subtitle">
        A visualization of all the books I read in 2023
      </p> */}
      <Bookshelf />
    </div>
  );
}

export default App;
