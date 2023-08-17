import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import CreateHero from "./components/CreateHero/CreateHero";
// import { HeroContext } from "./components/Context/Context";
import Spinner from "./common/Spinner";
// import { posterImage, formatDate } from "./components/helper";
import "./App.css";
// import { fetchPopularMovies } from "./components/api";

function App() {
  const Home = React.lazy(() => import("./components/Home/Home"));
  const Heroes = React.lazy(() => import("./components/Heroes/Heroes"));
  const Hero = React.lazy(() => import("./components/Hero/Hero"));
  const SearchResults = React.lazy(() =>
    import("./components/SearchResults/SearchResults")
  );

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);

  // const movieContextValue = {
  //   isLoading,
  //   setIsLoading,
  //   posterImage,
  //   formatDate,
  //   data,
  // };

  // useEffect(() => {
  //   fetchPopularMovies()
  //     .then((res) => {
  //       setData(res.data);
  //       localStorage.setItem("avgpopularity", JSON.stringify(res.data));
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        {/* <MovieContext.Provider value={movieContextValue}> */}
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/heroes/:id" element={<Hero />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/create" element={<CreateHero />} />
            {/* <Route path="/index" element={<Index />} /> */}
            <Route path="/404" element={<h1>404 Error Not Found</h1>} />
            <Route path="*" element={<h1>404 Error Not Found</h1>} />
          </Routes>
        </Router>
        {/* </MovieContext.Provider> */}
      </React.Suspense>
    </div>
  );
}

export default App;
