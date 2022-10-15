import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
import Home from "./Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
          <Home/>
        <Routes>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
