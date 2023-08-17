import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchbutton } from "../../assests/index";

import "./Searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "" || search.length < 2) return;
    navigate(`/search?query=${encodeURIComponent(search)}`);
    setSearch("");
  };
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2 searchbar"
        type="search"
        placeholder="Search Heroes..."
        aria-label="Search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-warning" type="submit">
        {/* <img
          src={searchbutton}
          alt="searchbutton"
          width="80"
          
          className="d-inline-block align-top px-4"
        /> */}
        Search
      </button>
    </form>
  );
}

export default Searchbar;
