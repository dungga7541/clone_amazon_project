import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Header/>}/>
          <Route/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
