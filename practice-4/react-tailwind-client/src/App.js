import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Add from "./Pages/Add/Add";
import Home from "./Pages/Home/Home";
import Manage from "./Pages/Manage/Manage";
import Products from "./Pages/Products/Products";
import Update from "./Pages/Update/Update";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
