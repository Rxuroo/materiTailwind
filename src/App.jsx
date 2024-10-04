import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/stylebaru.scss";
import { Await, BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail/Detail";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";
import Negara from "./pages/Negara/Negara";
import DetailProduct from "./pages/Detail/Detailproduct";
import ThemeContext from "./context/ThemeContext";


function App() {
  const Theme = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={Theme}>
        <Navbar />
        <Routes>
          z
          <Route path="/" element={<Profil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/negara" element={<Negara />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
