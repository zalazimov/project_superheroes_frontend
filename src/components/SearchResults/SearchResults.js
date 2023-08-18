import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HeroContext } from "../Context/Context";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Overlay from "../../common/Overlay";
import "./SearchResults.css";
const API = process.env.REACT_APP_API_URL;

function SearchResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const { setIsLoading, isLoading, poster } = useContext(HeroContext);
  const [results, setResults] = useState(null);
  const [noresult, setnoResult] = useState(null);

  async function fetchBySubstring(name) {
    try {
      const result = await axios.get(`${API}/heroes/search`, {
        params: { name: name },
      });
      return result;
    } catch (e) {
      console.log({ message: "no results", err: e });
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setResults(null);
    setnoResult(null);
    fetchBySubstring(query)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setnoResult(true);
        setIsLoading(false);
      });
  }, [query]);

  const comicTextStyle = {
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    // fontSize: "1.5rem",
    color: "#ffde59",
  };

  return (
    <Overlay isLoading={isLoading}>
      <div className="container my-4 min-vh-100">
        <section className="row text-center mt-5 results-section">
          <header>
            {results && (
              <div
                className="py-3 fs-4"
                style={comicTextStyle}
              >{`Search results for: "${query}"`}</div>
            )}
          </header>

          {results &&
            results
              .slice(0, results.length > 32 ? 32 : results.length)
              .map((hero) => {
                return (
                  <div
                    key={hero.id}
                    className="col-lg-3 col-md-4 col-sm-6 my-4"
                  >
                    <Link
                      className="link-underline link-underline-opacity-0"
                      style={comicTextStyle}
                      to={`/heroes/${hero.id}`}
                    >
                      <img
                        src={
                          hero.img
                            ? `https://www.superherodb.com/${hero.img}`
                            : poster()
                        }
                        alt={hero.name}
                        height="250px"
                        width="180px"
                        className="rounded-1"
                      ></img>
                      <p className="mt-1 fs-6">{hero.name}</p>
                    </Link>
                  </div>
                );
              })}
          {noresult && (
            <div className="container text-center mt-5">
              <div className="py-3 fs-4" style={comicTextStyle}>
                {`Search results for: "${query}"`}
                <h2>Sorry no results</h2>
                <button onClick={() => navigate(-1)}>back</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </Overlay>
  );
}

export default SearchResults;
