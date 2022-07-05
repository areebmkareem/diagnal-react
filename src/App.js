import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16">
        <Movies />
      </div>
    </div>
  );
}

export default App;
