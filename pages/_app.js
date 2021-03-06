import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { animated, Transition } from "react-spring";
import Header from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route}></Component>
      </AnimatePresence>
    </>
  );
}

console.log(
  "%c Made by hvnsen → https://twitter.com/connorhvnsen",
  "background: black; color: white; padding: 1ch 2ch; border-radius: 2rem;"
);

export default MyApp;
