import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Roboramen from "./layouts/Roboramen";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Router>
      <Roboramen />
    </Router>
  );
};

export default App;
