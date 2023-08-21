import React, { useContext } from "react";
import { editHeroInDB } from "../api/api";
import { validateForm } from "../helper";
import { FormContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function EditHero() {
  const navigate = useNavigate();
  const { setHero, hero, setShowForm, setEntry, entry } =
    useContext(FormContext);

  if (
    !validateForm.every((item) => entry[item] !== "" || entry[item] !== null)
  ) {
    alert("Please enter more information on the fields");
  }

  function handleSubmit(e) {
    e.preventDefault();
    let id = entry["id"];
    delete entry["id"];

    let newArr = [
      entry["superpower_A"],
      entry["superpower_B"],
      entry["superpower_C"],
    ].filter((item) => item.length > 1);

    delete entry["superpower_A"];
    delete entry["superpower_B"];
    delete entry["superpower_C"];

    entry["superpowers"] = JSON.stringify([
      ...new Set([...newArr, ...entry["superpowers"]]),
    ]);

    editHeroInDB(entry, id)
      .then((res) => {
        setShowForm(false);

        setEntry({
          ...res.data,
          superpower_A: "",
          superpower_B: "",
          superpower_C: "",
        });
      })
      .catch((e) => console.log(e));
    setShowForm(false);
    navigate(0);
  }

  function handleHeroInput(e) {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setEntry({ ...entry, [name]: e.target.value === "true" });
    } else {
      setEntry({ ...entry, [name]: value });
    }
  }

  return (
    <div>
      <div className="modal-header">
        <h4 className="modal-title">Edit Hero</h4>
        <button
          type="button"
          className="btn-close"
          onClick={() => setShowForm(false)}
        ></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.name}
            />
          </div>
          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="real_name">
              Real Name
            </label>
            <input
              type="text"
              name="real_name"
              id="real_name"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.real_name}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="history_text">
              Character History
            </label>
            <input
              required
              placeholder="A little about your new hero/villain..."
              type="textarea"
              className="form-control"
              id="history_text"
              name="history_text"
              value={entry.history_text}
              onChange={handleHeroInput}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="powers_text">
              Powers explanation
            </label>
            <input
              placeholder="Describe any powers..."
              type="textarea"
              className="form-control"
              id="powers_text"
              name="powers_text"
              value={entry.powers_text}
              onChange={handleHeroInput}
            />
          </div>

          <div className="mb-3">
            <label
              className="fs-5 fw-medium form-label"
              htmlFor="intelligence_score"
            >
              Intelligence Score
            </label>
            <input
              placeholder="0 - 100"
              type="number"
              min="0"
              max="100"
              name="intelligence_score"
              id="intelligence_score"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.intelligence_score}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="speed_score">
              Speed Score
            </label>
            <input
              placeholder="0 - 100"
              type="number"
              min="0"
              max="100"
              name="speed_score"
              id="speed_score"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.speed_score}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="power_score">
              Power Score
            </label>
            <input
              placeholder="0 - 100"
              type="number"
              min="0"
              max="100"
              name="power_score"
              id="power_score"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.power_score}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="combat_score">
              Combat Score
            </label>
            <input
              placeholder="0 - 100"
              type="number"
              min="0"
              max="100"
              name="combat_score"
              id="combat_score"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.combat_score}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="superpower_A">
              Superpower A
            </label>
            <input
              placeholder="Separate with a comma (ex: Super-strength, Invulnerability, etc.)..."
              required
              type="text"
              name="superpower_A"
              id="superpower_A"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.superpower_A}
            />
          </div>
          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="superpower_B">
              Superpower B
            </label>
            <input
              placeholder="Separate with a comma (ex: Super-strength, Invulnerability, etc.)..."
              type="text"
              name="superpower_B"
              id="superpower_B"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.superpower_B}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="superpower_C">
              Superpower C
            </label>
            <input
              placeholder="Separate with a comma (ex: Super-strength, Invulnerability, etc.)..."
              type="text"
              name="superpower_C"
              id="superpower_C"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.superpower_C}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="aliases">
              Aliases
            </label>
            <input
              required
              placeholder="Ex: The Dark Knight..."
              type="text"
              name="aliases"
              id="aliases"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.aliases}
            />
          </div>

          <div className="mb-3">
            <label
              className="fs-5 fw-medium form-label"
              htmlFor="place_of_birth"
            >
              Place of Birth
            </label>
            <input
              type="text"
              name="place_of_birth"
              id="place_of_birth"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.place_of_birth}
            />
          </div>

          <div className="mb-3">
            <label
              className="fs-5 fw-medium form-label"
              htmlFor="first_appearance"
            >
              First Appearance
            </label>
            <input
              placeholder="What comic and issue did they first appear, if any..."
              type="text"
              name="first_appearance"
              id="first_appearance"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.first_appearance}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="creator">
              Creator
            </label>
            <input
              required
              type="text"
              name="creator"
              id="creator"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.creator}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="occupation">
              Occupation
            </label>
            <input
              placeholder="Ex: News Reporter..."
              type="text"
              name="occupation"
              id="occupation"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.occupation}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="relatives">
              Relatives
            </label>
            <input
              type="text"
              name="relatives"
              id="relatives"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.relatives}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="gender">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.gender}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="type_race">
              Type/Race
            </label>
            <input
              type="text"
              name="type_race"
              id="type_race"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.type_race}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="img">
              Image
            </label>
            <input
              type="text"
              placeholder="URL path of the image of your hero..."
              name="img"
              id="img"
              className="form-control"
              onChange={handleHeroInput}
              value={entry.img}
            />
          </div>

          <div className="mb-3">
            <label className="fs-5 fw-medium form-label" htmlFor="is_favorite">
              Favorite
            </label>
            <div>
              <label htmlFor="is_favorite_true">
                <input
                  type="radio"
                  id="is_favorite_true"
                  name="is_favorite"
                  value={true}
                  checked={entry.is_favorite === true}
                  onChange={handleHeroInput}
                />
                Yes
              </label>
              <br />
              <label htmlFor="is_favorite_false">
                <input
                  type="radio"
                  id="is_favorite_false"
                  name="is_favorite"
                  value={false}
                  checked={entry.is_favorite === false}
                  onChange={handleHeroInput}
                />
                No
              </label>
            </div>
          </div>

          <div className="d-grid gap-2 mt-4 mb-4 col-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditHero;
