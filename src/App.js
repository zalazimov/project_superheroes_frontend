import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import CreateHero from "./components/CreateHero/CreateHero";
import Spinner from "./common/Spinner";
import "./App.css";

function App() {
  const Home = React.lazy(() => import("./components/Home/Home"));
  const Heroes = React.lazy(() => import("./components/Heroes/Heroes"));
  const Hero = React.lazy(() => import("./components/Hero/Hero"));
  const SearchRes = React.lazy(() =>
    import("./components/SearchRes/SearchRes")
  );

  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/heroes/:id" element={<Hero />} />
            <Route path="/search" element={<SearchRes />} />
            <Route path="/create" element={<CreateHero />} />
            <Route path="/404" element={<h1>404 Error Not Found</h1>} />
            <Route path="*" element={<h1>404 Error Not Found</h1>} />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
