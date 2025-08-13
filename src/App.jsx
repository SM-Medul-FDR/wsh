import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WishPage from "./components/WishPage";
import IntroPage from "./components/IntroPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/wish" element={<WishPage />} />
      </Routes>
    </BrowserRouter>
  );
}
