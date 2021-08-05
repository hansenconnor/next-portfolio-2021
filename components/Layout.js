import React from "react";
// import { NextSeo } from 'next-seo'
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = (props) => {
  const scrollRef = React.createRef();
  const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  return (
    <>
      {/* <NextSeo title={title} description={description} openGraph={{ title, description }} /> */}

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {props.children}
      </motion.main>
    </>
  );
};

export default Layout;
