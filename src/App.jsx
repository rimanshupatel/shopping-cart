import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
