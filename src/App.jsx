import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";
import HorizontalMarquee from "./Component/HorizontalMarquee.jsx";
import Profile from "./Component/Profile.jsx";
import Footer from "./Component/Footer.jsx";
import FAQ from "./Component/FAQ.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndividualProfile from "./Component/IndividualProfile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* Components that are always visible can be placed outside of <Routes> */}
      <Navbar />
      <Hero />
      <HorizontalMarquee text="This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!! This is TattoAdda !!!" />
      <Service />
      <Profile />

      {/* Define your routes */}
      <Routes>
        <Route path="/profile/:id" element={<IndividualProfile />} />
      </Routes>

      {/* Footer can be always visible */}
      <FAQ />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
