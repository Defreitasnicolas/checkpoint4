import "./DeleteButton.css";
import PropTypes from "prop-types";

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="deleteButton" onClick={onClick}>
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
