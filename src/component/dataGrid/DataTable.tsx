import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataTableProps {
  rows: any[];
  columns: GridColDef[];
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
    //   pageSize={5}
    //   rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
);

export default DataTable;