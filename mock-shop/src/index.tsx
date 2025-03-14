import ReactDOM from "react-dom/client";
import "./css/main.scss";
import reportWebVitals from "./reportWebVitals";
import { Landing } from "./layouts/landing";
import { ProductListing } from "./layouts/product-listing";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    <Routes>
      <Route path="/shop" element={<ProductListing />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
