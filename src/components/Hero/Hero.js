import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Overlay from "../../common/Overlay";
import { fetchHeroById } from "../api/api";
import { HeroContext, FormContext } from "../Context/Context";
import { FaTrash, FaEdit } from "react-icons/fa";
import DeleteHero from "../DeleteHero/DeleteHero";
import EditHero from "../EditHero/EditHero";
import "./Hero.css";

function Hero() {
  const { isLoading, setIsLoading, poster } = useContext(HeroContext);
  const { id } = useParams();
  const stockposter = poster();
  const [hero, setHero] = useState({});
  const [showForm, setShowForm] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [entry, setEntry] = useState({});
  const [showDel, setShowDel] = useState(false);
  const navigate = useNavigate();

  const formContextValue = {
    setHero,
    hero,
    setShowForm,
    setEntry,
    entry,
    selectedOptions,
    setSelectedOptions,
    setShowDel,
    id,
  };

  useEffect(() => {
    setIsLoading(true);

    fetchHeroById(id)
      .then((res) => {
        setHero(res.data);
        setIsLoading(false);

        setEntry({
          ...res.data,
          superpower_A: "",
          superpower_B: "",
          superpower_C: "",
        });
      })
      .catch((e) => navigate("/404"));
  }, [id]);

  function handleCloseModal() {
    setShowForm(false);
  }

  function handleClickEdit() {
    setSelectedOptions(() => entry.superpowers);
    setShowForm(true);
  }

  const handleClickTrash = () => {
    setShowForm(true);
    setShowDel(true);
  };

  return (
    <FormContext.Provider value={formContextValue}>
      <Overlay isLoading={isLoading}>
        <div>
          {hero.hasOwnProperty("id") && (
            <>
              {" "}
              <main className="container">
                <div className="row">
                  <div className="col-md-6 py-2 px-5">
                    <div className="">
                      <h2 className="text-warning">{hero.name}</h2>
                      <div className="text-warning">
                        {/* {JSON.stringify(hero.superpowers)} */}
                        <ul>
                          {hero.superpowers.map((power, i) => {
                            return <li key={i}>{power.trim()}</li>;
                          })}
                        </ul>
                      </div>
                    </div>

                    <p className="text-warning">
                      <span className="fw-bolder">Real Name</span>:{" "}
                      {hero.real_name || hero.name}
                    </p>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Character History</span>:{" "}
                      {hero.history_text}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Powers Description</span>:{" "}
                      {hero.powers_text}
                    </h5>
                    <h5 className="text-warning">
                      <span className="fw-bolder">
                        Intelligence Score (out of 100)
                      </span>
                      : {hero.intelligence_score}
                    </h5>
                    <h5 className="text-warning">
                      <span className="fw-bolder">
                        Speed Score (out of 100)
                      </span>
                      : {hero.speed_score}
                    </h5>
                    <h5 className="text-warning">
                      <span className="fw-bolder">
                        Power Score (out of 100)
                      </span>
                      : {hero.power_score}
                    </h5>
                    <h5 className="text-warning">
                      <span className="fw-bolder">
                        Combat Score (out of 100)
                      </span>
                      : {hero.combat_score}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Aliases</span>: {hero.aliases}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Place Of Birth</span>:{" "}
                      {hero.place_of_birth}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">First Appearance</span>:{" "}
                      {hero.first_appearance}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Creator</span>: {hero.creator}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Occupation</span>:{" "}
                      {hero.occupation}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Relatives</span>:{" "}
                      {hero.relatives}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Gender</span>: {hero.gender}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Type / Race</span>:{" "}
                      {hero.type_race}
                    </h5>

                    <h5 className="text-warning">
                      <span className="fw-bolder">Favorite</span>:{" "}
                      {hero.is_favorite === true ? "⭐️" : ""}
                    </h5>

                    <div className="row">
                      <div
                        onClick={handleClickTrash}
                        className="pointer-cursor"
                      >
                        <FaTrash className="col-sm-1 icon delete-icon text-danger" />
                      </div>
                      <div onClick={handleClickEdit}>
                        <FaEdit className="col-sm-1 icon edit-icon text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mx-auto">
                    <div className="container">
                      <div className="text-center">
                        <img
                          src={
                            hero.img
                              ? `https://www.superherodb.com${hero.img}`
                              : stockposter
                          }
                          alt={hero.name}
                          className="poster img-fluid rounded-1 text-align-center"
                        />

                        <div className="mt-1 text-secondary">{hero.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>{" "}
            </>
          )}
          {showForm && (
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{ display: "block" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  {!showDel ? <EditHero /> : <DeleteHero name={hero.name} />}
                </div>
              </div>
            </div>
          )}
          {showForm && (
            <div
              className="modal-backdrop fade show"
              onClick={handleCloseModal}
            ></div>
          )}
        </div>
      </Overlay>
    </FormContext.Provider>
  );
}

export default Hero;
