import ReactDOM from "react-dom/client";
import "./css/main.scss";
import { Landing } from "./layouts/landing";
import { ProductListing } from "./layouts/product-listing";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/shop" element={<ProductListing />} />
    </Routes>
  </BrowserRouter>
);
