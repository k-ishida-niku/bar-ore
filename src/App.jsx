import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MenuPage } from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/bar-ore/" element={<Home />} />
        <Route path="/bar-ore/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
