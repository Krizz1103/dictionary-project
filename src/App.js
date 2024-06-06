import "./App.css";
import Dictionary2 from "./Dictionary2";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <h2>What word are you looking for?</h2>
        <main>
          <Dictionary2 />
        </main>
        <footer className="App-footer">
          <small>Coded by Kristin Kessler</small>
        </footer>
      </div>
    </div>
  );
}
