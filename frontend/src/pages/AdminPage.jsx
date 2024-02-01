import "./AdminPage.css";
import { useState } from "react";
import AdminTable from "../components/adminComponents/AdminTable";
import InputSearchBar from "../components/adminComponents/InputSearchBar";
import FormPost from "../components/adminComponents/FormPost";

function AdminPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="adminContainer">
      <div className="tableSearchContainer">
        <InputSearchBar setSearch={setSearch} />
        <AdminTable search={search} />
      </div>
      <div>
        <FormPost />
      </div>
    </div>
  );
}

export default AdminPage;
