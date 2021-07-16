import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import DetailsDialog from "../dialog/details";
const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 40,
        sortable: false,
    },
    {
        field: "Avatar",
        headerName: "Avatar",
        width: 120,
        sortable: false,
        renderCell: (params) => <Avatar alt="" src={params.row.avatar} />,
    },
    {
        field: "first_name",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "email",
        headerName: "Email",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "details",
        headerName: "Details",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        renderCell: (params) => <DetailsDialog id={params.row.id} />,
    },
];


const DataGridUser = ({ list }) => {
    return (
        <div style={{ height: "80%", width: "100%" }}>
            <DataGrid
                rows={list}
                columns={columns}
                hideFooterPagination={true}
                disableSelectionOnClick
            />
        </div>
    );
};
export default DataGridUser;
