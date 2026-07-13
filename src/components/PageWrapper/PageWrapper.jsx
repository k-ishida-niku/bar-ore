import { motion } from "framer-motion"; // これを追加
// const pageVariants = {
//   initial: { opacity: 0 }, // 初期状態
//   animate: { opacity: 1 }, // 表示時
//   exit: { opacity: 0 }, // 消える時
// };

// const pageTransition = {
//   duration: 0.4,
//   ease: "easeInOut",
// };

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // x: "-100%",
        clipPath: "inset(0% 0% 0% 100%)",
      }} // 初期状態
      animate={{
        opacity: 1,
        // x: "0",
        clipPath: "inset(0%)",
      }} // 表示時
      exit={{
        opacity: 0,
        // x: "100%",
        clipPath: "inset(0% 0% 0% 100%)",
      }} // 消える時
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
