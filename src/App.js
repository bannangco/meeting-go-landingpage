import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import DownloadPage from "./pages/DownloadPage";
import FoodTest from "./pages/FoodTest";
import ResultPage from "./pages/ResultPage";
import SharePage from "./pages/SharePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import FooterNew from './components/FooterNew';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/food-test");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />}></Route>
        <Route path="/download" exact={true} element={<DownloadPage />}></Route>
        <Route path="/food-test" exact={true} element={<FoodTest />}></Route>
        <Route path="/food-test/result/:resultId" element={<ResultPage />}></Route>
        <Route path="/food-test/share/:resultId" element={<SharePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      {!hideNavbarFooter && <FooterNew />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
export default App;
