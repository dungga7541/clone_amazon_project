import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
// import Login from "./Login/Login";
// import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Header/>}/><Route/>
          <Route path='/home' element={<Home/>}/><Route/>
          {/* <Route path='/login' element={<Login/>}/><Route/>
          <Route path='/checkout' element={<Checkout/>}/><Route/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
