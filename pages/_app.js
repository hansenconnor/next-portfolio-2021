import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { animated, Transition } from "react-spring";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route}></Component>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
