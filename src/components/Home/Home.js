import React from "react";
import { giflLogo } from "../../assets";
import { Link } from "react-router-dom";

function Home() {
  const comicTextStyle = {
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    fontSize: "1.5rem",
    color: "#ffde59",
  };

  const linkStyle = {
    color: "#ffde59",
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="mt-5 text-center">
        <div className="py-2 text-center">
          <img
            style={{ maxWidth: "20%", height: "auto" }}
            src={giflLogo}
            alt="logo"
          />
        </div>
        <div className="w-50 text-center mx-auto">
          <h4 style={comicTextStyle}>
            Welcome to BAM!POW! Want to learn more about your favorite DC or
            Marvel heroes? You've come to the right place! Learn about the
            origins, powers, and even the first appearances of your favorite
            superheroes and villans.
          </h4>
          <h4 style={comicTextStyle}>
            Try searching for your favorite heroes and villains by name. To
            check out some of our featured superheroes, click on the logo at the
            top corner of the page, or you can click{" "}
            <Link style={linkStyle} to="/heroes">
              here
            </Link>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
