import { useState } from "react";
import Add from "../../components/Add/add";
import DataTable from "../../components/dataTable/dataTable";
import "./products.scss";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "title",
      width: 150,
    },
    {
      field: "color",
      type: "string",
      headerName: "color",
      width: 150,
    },
    {
      field: "producer",
      type: "string",
      headerName: "producer",
      width: 200,
    },
    {
      field: "price",
      type: "string",
      headerName: "price",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

const Products = () => {


  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />

      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
export default Products;
