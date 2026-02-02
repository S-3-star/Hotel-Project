// import React from 'react'
// import Banner from './Component/Banner'
// import Header from './Component/Header'
// import ProductCard from './Component/ProductCard';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Banner />
//       <div className="flex justify-center gap-8 flex-wrap my-12">
//         <ProductCard
//           image="/p.jpg"
//           name="Londrilar Sofa"
//           price="$2000"
//           address="Pulchowk"
//         />

//         <ProductCard
//           image="/h.jpg"
//           name="Soft sofa"
//           price="$850"
//           address="Baneshwor"
//         />

//         <ProductCard
//           image="/v.jpg"
//           name="Luxury Table"
//           price="$1200"
//           address="Lalitpur"
//         />

//         <ProductCard
//           image="/m.jpg"
//           name="Modern Table"
//           price="$1200"
//           address="Lalitpur"
//         />
//       </div>
//     </div>
//   );
// }

// export default App

import { Routes, Route } from "react-router";
import Home from "./page/Home";
import PublicLayout from "./layout/PublicLayout";
// import Contact from "./page/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}