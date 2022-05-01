import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Blog from "./pages/Blog";
import Deck from "./pages/Deck";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-bg-img min-h-screen overflow-x-hidden min-hw-screen bg-cover md:bg-contain">
        <div className="relative bg-black min-h-screen bg-opacity-75">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='blogs' element={<Deck />} />
              <Route path='blogs/:id' element={<Blog />} />
              <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;