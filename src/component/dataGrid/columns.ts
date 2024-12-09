import { GridColDef } from "@mui/x-data-grid";

export const columns = {
    users: [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
    ] as GridColDef[],
    products: [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Product Name", width: 150 },
        { field: "price", headerName: "Price", width: 100 },
    ] as GridColDef[],
};

export default columns;