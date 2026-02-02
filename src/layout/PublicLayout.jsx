import Header from "../Component/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
