import { DataProvider } from "./context/dataContext";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
