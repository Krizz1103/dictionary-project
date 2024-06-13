import "./App.css";
import Dictionary2 from "./Dictionary2";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary App</strong>
        </header>

        <main>
          <Dictionary2 />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Kristin Kessler this project is open-sourced on{" "}
            <a
              href="https://github.com/Krizz1103/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://app.netlify.com/sites/krizz-dictionary-project/overview"
              target="_blank"
              el="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
