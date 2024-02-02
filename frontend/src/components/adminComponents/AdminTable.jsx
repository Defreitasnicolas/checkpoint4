import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";
import "./AdminTable.css";

function AdminTable({ search }) {
  const [TattooData, setTattooData] = useState([]);

  const getTattoos = async () => {
    try {
      const res = await connexion.get(`/tattoos?search=${search}`);
      setTattooData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTattoos();
  }, [search]);

  const deleteData = (id) => {
    try {
      connexion.delete(`/tattoos/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr className="title-table">
          <th>#</th>
          <th>Style</th>
          <th>Image</th>
          <th>#Edit</th>
        </tr>
      </thead>
      <tbody>
        {TattooData.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.style}</td>
            <td>{el.image}</td>
            <td className="button-container" aria-label="delete-button">
              <DeleteButton onClick={() => deleteData(el.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

AdminTable.propTypes = {
  search: PropTypes.string.isRequired,
}.isRequired;

export default AdminTable;
