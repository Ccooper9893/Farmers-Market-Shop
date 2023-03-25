import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0"></div>
            <div>
              <div class="text-xl font-medium text-black">Hello!</div>
              <p class="text-slate-500">I'm Tailwind!</p>
            </div>
            <div>
              <button className="btn">And I'm daisyUI!</button>
            </div>
          </div>
          <p class="text-white-500">Now you can use both of us! </p>
          <div>
          <button class="btn btn-primary">One</button>
          <button class="btn btn-secondary">Two</button>
          <button class="btn btn-accent btn-outline">Three</button>
          </div>
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
    </>
  );
}

export default App;
