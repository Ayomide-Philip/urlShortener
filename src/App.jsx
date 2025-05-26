import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form encType="application/x-www-form-urlencoded">
          <h1>URL Shortener</h1>
          <input type="text" placeholder="Enter URL" />
          <button type="submit">Shorten</button>
        </form>
      </div>
    </div>
  );
}
