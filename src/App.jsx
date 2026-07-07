import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ChangePageScrollY } from "./components/ChangePageScrollY/ChangePageScrollY";
import { useGsapRefresh } from "./hooks/useGsaRefresh";

function LayOut() {
  useGsapRefresh();
  return (
    <>
      <ChangePageScrollY />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
