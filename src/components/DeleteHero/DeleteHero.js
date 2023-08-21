import { useContext } from "react";
import { deleteHeroById } from "../api/api";
import { FormContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function DeleteHero({ name }) {
  const { setShowDel, setShowForm, id } = useContext(FormContext);
  const navigate = useNavigate();

  function handleDelete() {
    deleteHeroById(id)
      .then((res) => navigate("/index"))
      .catch((e) => {
        console.log(e);
      });
    setShowDel(false);
    setShowForm(false);
  }

  return (
    <div>
      {" "}
      <div className="modal-header">
        <h4 className="modal-title">Wait!</h4>
        <button
          type="button"
          className="close"
          onClick={() => {
            setShowDel(false);
            setShowForm(false);
          }}
        >
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {`Are you sure you want to delete ${name}?`}
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setShowDel(false);
            setShowForm(false);
          }}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteHero;
