import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" exact={true} element={<LandingPage />}></Route>
          <Route path="/form" exact={true} element={<FormPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
