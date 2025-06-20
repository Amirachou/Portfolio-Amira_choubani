import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* ⭐ Fond étoilé global */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <StarsCanvas />
        </div>

        {/* Section Hero sans le motif vague */}
        <div>
          <Navbar />
          <Hero />
        </div>

        {/* Les autres sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact avec Terre animée */}
        <div className="relative z-10 bg-black-100">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
