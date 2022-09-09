import './App.css';
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import SearchPage from "./components/Search/SearchPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
