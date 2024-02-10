import "./App.scss";
import Bookshelf from "./Bookshelf";
import BookStats from "./BookStats";
import BookList from "./BookList";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">2023 Bookshelf</h1>
      <p className="App-subtitle">
        A visualization of all the books I read in 2023
      </p>
      <div className="App-sections">
        <Bookshelf />
        <BookStats />
        <BookList />
      </div>
    </div>
  );
}

export default App;
