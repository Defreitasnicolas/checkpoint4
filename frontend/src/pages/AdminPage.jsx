import "./AdminPage.css";
import { useState } from "react";
import AdminTable from "../components/adminComponents/AdminTable";
import InputSearchBar from "../components/adminComponents/InputSearchBar";

function AdminPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-navbar-table">
      <div className="table-search">
        <InputSearchBar setSearch={setSearch} />
        <AdminTable search={search} />
      </div>
    </div>
  );
}

export default AdminPage;
