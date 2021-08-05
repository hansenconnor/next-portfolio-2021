import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Header from "../components/Navbar";
import { useSpring, animated, config } from "react-spring";
import Layout from "../components/Layout";
import gallery from "../public/gallery.png"
import { useEffect } from "react"

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
        <title>Connor Hansen</title>
        <meta name="description" content="Neon Mode Designer ✣ Creative Director ✣ Fashion Photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex items-center h-screen px">
        <h3 className="text-2xl sm:w-11/12 sm:text-3xl sm:leading-relaxed leading-normal md:text-4xl md:w-11/12 lg:w-5/6 md:leading-normal text-gray-600">
          Combining{" "}
          <span className="text-gray-900">
            creativity, technology, design and strategy
              </span>{" "}
              to help brands{" "}
          <span className="text-gray-900">exceed their goals</span> and
              ultimately{" "}
          <span className="text-gray-900">build better businesses</span>.
            </h3>
      </section>


      <section className="flex items-center h-screen">
        <Image src={gallery} layout={"intrinsic"}></Image>
      </section>

      <section className="flex items-center h-screen">
        <p class="text-3xl leading-relaxed">
        Connor Hansen is an award-winning designer working at the intersection of digital product and brand identity.
          <br></br><br></br>
          He has curated concept works for products and experiences loved by millions. These include Spotify, Gucci, Nike, IBM, Louis Vuitton and more.
          <br></br><br></br>
          Currently, he guides creative at HealthBridge.
          <br></br><br></br>
          Full bio here
        </p>
      </section>

      {/* <div className="absolute left-1/3">
            <Sphere></Sphere>
          </div> */}

      {/* <Image src={gallery} layout={"fill"} objectFit={"cover"}></Image> */}

      <footer></footer>
    </>
  );
}
