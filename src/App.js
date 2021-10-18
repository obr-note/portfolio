import React, { useEffect } from "react";
import HomeLight from "./views/all-home-version/HomeLight";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="52, 73, 94"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <HomeLight />
    </>
  );
};

export default App;
