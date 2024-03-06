import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import React, { useState } from 'react'

export const TableRegistros = ({columnas, data, pageSize}) => {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSize, //customize the default page size
  });

  const table = useMaterialReactTable({
    columns:columnas,
    data,
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination }, //pass the pagination state to the table
  });

  return <MaterialReactTable table={table}/>
}
