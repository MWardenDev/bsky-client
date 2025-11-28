import "./App.css";
import Feed from "./components/Feed";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Portfolio Feed</h1>
        <p>Phase 1: Getting the feed on screen.</p>
      </header>

      <Feed />
    </main>
  );
}

export default App;
