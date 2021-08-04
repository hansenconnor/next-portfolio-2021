import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function About({ Component, pageProps }) {
  return (
    <Parallax pages={2} className="h-full flex flex-col">
      <ParallaxLayer offset={0} speed={0.2} className="flex items-center z-10">
        <div className="container mx-auto">
          <h3 className="text-5xl leading-snug text-gray-600">
            Bio goes here
          </h3>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.4}>
        <div className="absolute right-52">
          
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0}
        style={{ backgroundColor: "#F0F0F0" }}
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
  );
}

export default About;
