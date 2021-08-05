import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Header from "../components/Navbar";
import { useSpring, animated, config } from "react-spring";
import Layout from "../components/Layout";
import gallery from "../public/gallery.png"
import { useEffect } from "react"
import Link from "next/link"

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
    <Layout>
      <Head>
        <title>Connor Hansen</title>
        <meta name="description" content="Neon Mode Designer ✣ Creative Director ✣ Fashion Photographer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex items-center h-screen px relative">
        <h3 className="text-2xl sm:w-11/12 sm:text-3xl sm:leading-relaxed leading-normal md:text-4xl md:w-11/12 lg:w-5/6 md:leading-normal text-gray-600 z-10">
          Combining{" "}
          <span className="text-gray-900">
            creativity, technology, design and strategy
              </span>{" "}
              to help brands{" "}
          <span className="text-gray-900">exceed their goals</span> and
              ultimately{" "}
          <span className="text-gray-900">build better businesses</span>.
            </h3>

        <div className="absolute left-2/3 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <Sphere></Sphere>
        </div>
      </section>


      <section className="flex items-center" style={{ paddingLeft: "2.5vw", paddingRight: "2.5vw", paddingBottom: "20vw"}}>
        <Image src={gallery} layout={"intrinsic"} className="bg-gray-100"></Image>
      </section>

      <section className="flex items-center justify-center" style={{ paddingBottom: "20vw" }}>
        <p className="text-3xl leading-relaxed lg:w-5/6">
          Connor Hansen is a self-taught designer working at the intersection of digital product and brand identity.
          <br></br><br></br>
          He has curated concept works for products and experiences loved by millions. These include Spotify, Gucci, Nike, IBM, Louis Vuitton and more.
          <br></br><br></br>
          Currently <Link href="https://myhealthbridge.com"><a className="text-green-500 hover:text-green-600" target="_blank">@HealthBridge</a></Link>
          <br></br><br></br>
          Full bio here
        </p>
      </section>

      <section className="flex items-center h-screen bg-red-400">

      </section>


      {/* <Image src={gallery} layout={"fill"} objectFit={"cover"}></Image> */}

      <footer></footer>
    </Layout>
  );
}
