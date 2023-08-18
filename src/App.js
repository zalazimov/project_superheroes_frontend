import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import CreateHero from "./components/CreateHero/CreateHero";
import { HeroContext } from "./components/Context/Context";
import Spinner from "./common/Spinner";
import { poster } from "./components/helper";
import "./App.css";

function App() {
  const Home = React.lazy(() => import("./components/Home/Home"));
  const Heroes = React.lazy(() => import("./components/Heroes/Heroes"));
  const Hero = React.lazy(() => import("./components/Hero/Hero"));
  const SearchResults = React.lazy(() =>
    import("./components/SearchResults/SearchResults")
  );

  const [isLoading, setIsLoading] = useState(false);

  const HeroContextValues = {
    isLoading,
    setIsLoading,
    poster,
  };

  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <HeroContext.Provider value={HeroContextValues}>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heroes" element={<Heroes />} />
              <Route path="/heroes/:id" element={<Hero />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/create" element={<CreateHero />} />

              <Route path="/404" element={<h1>404 Error Not Found</h1>} />
              <Route path="*" element={<h1>404 Error Not Found</h1>} />
            </Routes>
          </Router>
        </HeroContext.Provider>
      </React.Suspense>
    </div>
  );
}

export default App;
