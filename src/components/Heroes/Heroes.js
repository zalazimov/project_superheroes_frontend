import React, { useState, useEffect, useContext } from "react";
import { HeroContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { fetchHeroesData } from "../api/api";

// import axios from "axios";

import { useNavigate } from "react-router-dom";
import Overlay from "../../common/Overlay";
import "./Heroes.css";

function Heroes() {
  const navigate = useNavigate();
  const [heroes, setHeroes] = useState([]);

  const { poster, isLoading, setIsLoading } = useContext(HeroContext);

  // async function fetchHeroesData() {
  //   try {
  //     const result = await axios.get("http://localhost:3001/heroes");
  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const ImageWithFallback = ({ src, alt }) => {
    const handleImageError = (e) => {
      e.target.src = poster();
    };

    return (
      <img
        src={src}
        alt={alt}
        height="250px"
        width="180px"
        className="rounded-1"
        onError={handleImageError}
      />
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetchHeroesData()
      .then((res) => {
        let maxResults = 16;
        let count = 0;
        let randomIndexArr = [];
        while (count < maxResults) {
          let randomIndexNumber = Math.floor(Math.random() * res.data.length);
          if (!randomIndexArr.includes(randomIndexNumber)) {
            randomIndexArr.push(randomIndexNumber);
            count++;
          }
        }
        // console.log(res.data);
        // console.log(randomIndexArr);
        setHeroes(() =>
          randomIndexArr.map((item) => {
            return res.data[item];
          })
        );
        setIsLoading(false);
      })
      .catch((e) => navigate("/404"));
  }, []);

  const comicTextStyle = {
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    color: "#ffde59",
  };

  return (
    <Overlay isLoading={isLoading}>
      <div className="container my-4 min-vh-100 results-section">
        <section className="row text-center mt-5 results-section">
          <header>
            {heroes[0] && (
              <div className="py-3 fs-4" style={comicTextStyle}>
                Featured Heroes
              </div>
            )}
          </header>

          {heroes[0] &&
            heroes.map((hero, index) => {
              return (
                <div key={hero.id} className="col-lg-3 col-md-4 col-sm-6 my-4">
                  <Link
                    className="link-underline link-underline-opacity-0"
                    style={comicTextStyle}
                    to={`/heroes/${hero.id}`}
                  >
                    <ImageWithFallback
                      key={index}
                      src={`https://www.superherodb.com${hero.img}`}
                      alt={`Image ${index}`}
                    />

                    <p className="mt-1 fs-6">{hero.name}</p>
                  </Link>
                </div>
              );
            })}
        </section>
      </div>
    </Overlay>
  );
}

export default Heroes;
