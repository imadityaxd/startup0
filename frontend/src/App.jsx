import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import ProductGrid from "./components/products";
import GetStartedSection from "./components/cta";
import AboutUss from "./pages/About";
import Footer from "./components/footer";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import DummyPaymentForm from "./components/PaymentForm";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/startups" element={<ProductGrid />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUss />} />
          <Route path="/payment" element={<DummyPaymentForm />} />
        </Routes>
      </Router>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
