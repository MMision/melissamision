import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Development = lazy(() => import("./pages/Development"));
const DigitalIllustration = lazy(() => import("./pages/DigitalIllustration"));
const FineArts = lazy(() => import("./pages/FineArts"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Development" element={<Development />} />
          <Route path="DigitalIllustration" element={<DigitalIllustration />} />
          <Route path="FineArts" element={<FineArts />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
