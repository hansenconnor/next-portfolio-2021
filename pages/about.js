import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/Layout"

function About({ Component, pageProps }) {
  return (
    <Layout>
        <div className="container mx-auto">
          <h3 className="text-5xl leading-snug text-gray-600">
            Bio goes here
          </h3>
        </div>

    </Layout>
  );
}

export default About;
