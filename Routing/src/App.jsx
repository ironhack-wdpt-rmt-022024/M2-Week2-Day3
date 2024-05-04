import "./App.css";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { Post } from "./components/Post";
import { Ragnar } from "./components/Ragnar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DogDetail } from "./components/DogDetail";

function App() {
  return (
    <>
      <Navbar />
      {/* this is where we defind our routes, between the Routes with an 's' tag */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/ragnars" element={<Ragnar />} />
        {/* this is a dynamic route */}
        <Route path="/dogs/:dogName" element={<DogDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
