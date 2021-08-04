import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Header from "../components/Header";
import { useSpring, animated, config } from "react-spring";
import Layout from "../components/Layout";

function Sphere() {
  const styles = useSpring({
    loop: true,
    height: "500px",
    width: "500px",
    borderRadius: "500px",
    filter: "blur(125px)",
    config: config.molasses,
    to: [
      { backgroundColor: "#CC61FF" },
      { backgroundColor: "#61FFE3" },
      { backgroundColor: "#D6FF61" },
      { backgroundColor: "#FF6F61" },
    ],
    from: {
      backgroundColor: "#FF6F61",
      height: "500px",
      width: "500px",
      borderRadius: "500px",
      filter: "blur(125px)",
    },
  });
  // ...
  return <animated.div style={styles}></animated.div>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Neon Mode Designer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Parallax pages={2} className="h-full flex flex-col">
        <ParallaxLayer offset={0} speed={-0.4} className="flex items-center z-10">
          <div className="container mx-auto">
            <h3 className="text-2xl w-11/12 sm:w-11/12 sm:text-3xl sm:leading-relaxed leading-normal md:text-4xl md:w-11/12 lg:w-5/6 md:leading-normal text-gray-600">
              Combining{" "}
              <span className="text-gray-900">
                creativity, technology, design and strategy
              </span>{" "}
              to help brands{" "}
              <span className="text-gray-900">exceed their goals</span> and
              ultimately{" "}
              <span className="text-gray-900">build better businesses</span>.
            </h3>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.8}>
          <div className="absolute left-1/3">
            <Sphere></Sphere>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ backgroundColor: "#F0F0F0" }}
          className="z-10"
        />

        {/* <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Keep Scrolling</p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#101010' }} />

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer> */}
      </Parallax>

      <footer></footer>
    </>
  );
}
