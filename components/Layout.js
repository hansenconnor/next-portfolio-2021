import React from 'react'
// import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { useEffect } from 'react'


const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}



const Layout = (props) => {

    const scrollRef = React.createRef();

    // useEffect(() => {
    //     if (typeof window === "undefined") {
    //         return;
    //     }
    //     const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
    //         new LocomotiveScroll.default({
    //           el: scrollRef.current,
    //           smooth: true
    //         });
    //       });

    //     return () => scroll.destroy();
    // }, []);

    return (
        <div className="scroll" ref={scrollRef}>
            {/* <NextSeo title={title} description={description} openGraph={{ title, description }} /> */}
            <Navbar></Navbar>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
            >
                {props.children}
            </motion.main>
        </div>
    )
}

export default Layout