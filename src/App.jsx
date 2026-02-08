import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import PublicLayout from "./layout/PublicLayout";
import About from "./page/About";
import Room from "./page/Room";
import Amenities from "./page/Amenities";
import Dining from "./page/Dining";
import ContactUs from "./page/ContactUs";
import Gallery from "./page/Gallery";
// import Contact from "./page/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Room" element={<Room />} />
        <Route path="Amenities" element={<Amenities />} />
        <Route path="Dining" element={<Dining />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Gallery" element={<Gallery/>} />
      </Route>
    </Routes>
  );
}