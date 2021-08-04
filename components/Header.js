import Image from "next/image";
import Logo from "../public/logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

function Header({ Component, pageProps }) {
  const [open, set] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const router = useRouter();
  const styles = useSpring({
    from: {
      y: "-100vh",
      opacity: 0,
    },
    to: {
      y: open ? "0vh" : "-100vh",
      opacity: open ? 1 : 0,
    },
  });

  const hamburgerStyles = useSpring({
    config: config.molasses,
    from: { backgroundColor: "#000" },
    to: {
      backgroundColor: open ? "#FFF" : "#000",
    },
  });

  useEffect(() => {
    // After the route is done loading or the route is the same, toggle the menu var
    // TODO: CLean these up - probably leaking
    router.events.on('routeChangeComplete', () => {
      set((open) => !open)
    })
    router.events.on('hashChangeComplete', () => {
      set((open) => !open);
    });

    return () => {
      router.events.off('hashChangeComplete')
    }
  }, []);
  //   useEffect(() => {

  //     setCurrentRoute(router.pathName);
  //   }, [router.pathName]);

  return (
    <header className="fixed w-full z-10">
      <div className="w-full flex flex-row items-center px-12 py-8">
        <Image src={Logo} alt="hvnsen logo"></Image>
        <div
          className="menu-toggle-container ml-auto z-20 cursor-pointer w-6  h-4 block relative"
          onClick={() => set((open) => !open)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <animated.span
            style={hamburgerStyles}
            className={`h-0.5 transition-all ease-in-out ${hovered ? 'w-1/2' : 'w-full'} absolute top-0 right-0 block`}
          ></animated.span>
          <animated.span
            style={hamburgerStyles}
            className={`h-0.5 transition-all ease-in-out ${hovered ? 'w-full' : 'w-1/2'} block absolute bottom-0`}
          ></animated.span>
        </div>
      </div>

      <animated.div
        style={styles}
        className={`h-screen w-full bg-black absolute left-0 top-0 flex items-center`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/about">
              <a className="text-white text-5xl md:text-8xl">About</a>
            </Link>
            <a
              href="https://instagram.com/connorcodes"
              target="_blank"
              rel="noreferrer"
              className="text-white text-5xl md:text-8xl hover:text-red-500"
            >
              Insta
            </a>
            <Link href="/">
              <a className="text-white text-5xl md:text-8xl">Work</a>
            </Link>
            <a
              href="https://twitter.com/connorhvnsen"
              target="_blank"
              rel="noreferrer"
              className="text-white text-5xl md:text-8xl hover:text-blue-500"
            >
              Twitter
            </a>
            <Link href="/blog" target="_blank">
              <a className="text-white text-5xl md:text-8xl">Blog</a>
            </Link>
            <a
              href="https://github.com/hansenconnor"
              target="_blank"
              rel="noreferrer"
              className="text-white text-5xl md:text-8xl hover:text-green-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </animated.div>
    </header>
  );
}

export default Header;
