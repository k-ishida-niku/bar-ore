import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // これを追加
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Home } from "./pages/Home/Home";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ChangePageScrollY } from "./components/ChangePageScrollY/ChangePageScrollY";
import { useGsapRefresh } from "./hooks/useGsaRefresh";
import { useLenis } from "./hooks/useLenis";

function LayOut() {
  useGsapRefresh();
  useLenis();
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
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayOut />}>
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="menu"
            element={
              <PageWrapper>
                <MenuPage />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default App;
