import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // これを追加
import { Home } from "./pages/Home/Home";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { ChangePageScrollY } from "./components/ChangePageScrollY/ChangePageScrollY";
import { useGsapRefresh } from "./hooks/useGsaRefresh";
import { useLenis } from "./hooks/useLenis";

function LayOut() {
  const location = useLocation();
  useGsapRefresh();
  useLenis();
  return (
    <>
      <ChangePageScrollY />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // 表示時
          exit={{ opacity: 0 }} // 消える時
          transition={{ duration: 0.4, ease: "easeInOut" }} // アニメーションの長さと緩急
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
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
