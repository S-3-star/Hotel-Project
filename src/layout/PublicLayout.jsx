import Header from "../Component/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
// import Gallery from "../page/Gallery";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      {/* <Gallery/> */}

      <Footer />
    </>
  );
}
