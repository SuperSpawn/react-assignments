import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Products } from "./components/Products";

//15.1

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/products" element={ <Products/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
