import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Quotes from "./components/Quotes";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/requirements" element={<Requirements/>} />
        <Route path="/quotes" element={<Quotes/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App;