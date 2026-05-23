import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CardSections from "./pages/CardSections";
import TentangPreview from "./pages/TentangPreview";
import GaleriPreview from "./pages/GaleriPreview";

import Galeri from "./pages/Galeri";
import Tentang from "./pages/Tentang";

function HomePage() {
  return (
    <>
      <Home />
      <CardSections />
      <TentangPreview />
      <GaleriPreview />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-clip">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}