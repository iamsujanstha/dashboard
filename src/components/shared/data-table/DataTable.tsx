import * as React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  RowData,
  RowSelectionState,
  useReactTable,
} from '@tanstack/react-table'
import styles from './table.module.scss'
import TableFooter from '@/components/shared/data-table/TableFooter'


interface IDataTable<TData> {
  data: TData[];
  // eslint-disable-next-line
  columns: ColumnDef<TData, any>[];
  isLoading: boolean;
  paginationServer?: boolean;
  paginationRowsPerPage?: number[];
  onPaginationChange?: React.Dispatch<React.SetStateAction<PaginationState>>;
  pageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  rowSelection?: RowSelectionState;
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  hasPagination?: boolean;
  showColumn?: boolean;
  onGlobalFilterChangeProps?: React.Dispatch<React.SetStateAction<string>>;
  sticky?: string;
  // handleRowSelectedData?: (data: RowModel<TData>) => void
  recordsTotal?: number,
}

const DataTable = <TData extends RowData>(props: IDataTable<TData>) => {
  const { hasPagination, recordsTotal, paginationRowsPerPage, columns, data } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <table cellPadding={0} cellSpacing={0} className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={styles.tableRow}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {hasPagination &&
        <TableFooter table={table}
          recordsTotal={recordsTotal}
          // paginationServer={paginationServer}
          // pagination={pagination}
          paginationRowsPerPageOptions={paginationRowsPerPage} />}
    </>
  )
}


export default DataTable;