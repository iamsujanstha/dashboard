import { useMemo } from "react";
import { getPageNumbers, paginationRowOpt } from "@/utils/table-utils";
// import { ArrowLineLeft, ArrowLineRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { PaginationState, RowData, Table } from "@tanstack/react-table";
import styles from './TableFooter.module.scss';

interface ITableFooterProps<TData> {
  table: Table<TData>;
  pagination?: PaginationState;
  paginationServer?: boolean;
  paginationRowsPerPageOptions?: Array<number>;
  recordsTotal?: number
}

const TableFooter = <TData extends RowData>({
  table,
  pagination,
  paginationServer,
  paginationRowsPerPageOptions = paginationRowOpt,
  recordsTotal
}: ITableFooterProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageSize = paginationServer ? pagination?.pageSize || 10 : table.getState().pagination.pageSize;
  const total = paginationServer
    ? recordsTotal ?? table.getPageCount() * (pagination?.pageSize || 10)
    : table.getPrePaginationRowModel().rows.length;

  const pageNumbers = getPageNumbers({
    currentPage,
    pageSize,
    total,
  });

  const handleDotPageChange = (i: number) => {
    const isSecondlastIdx = pageNumbers[pageNumbers.length - 2] === "...";
    const pageIndex = isSecondlastIdx ? (pageNumbers[pageNumbers.length - 1] as number) - 2 : i;
    table.setPageIndex(pageIndex);
  };
  const pagesStartEndData = useMemo(() => {
    const page = currentPage - 1;
    return {
      startPage: page * pageSize + 1,
      endPage: page * pageSize + table.getRowModel().rows.length,
    };
  }, [currentPage, pageSize, table]);

  return (
    <div className={styles.tableFooter}>
      <div className={styles.view}>
        <p>
          View
        </p>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {paginationRowsPerPageOptions.map((pageSizeOpt) => (
            <option key={pageSizeOpt} value={pageSizeOpt}>
              {pageSizeOpt}
            </option>
          ))}
        </select>
        <p>
          per page
        </p>
      </div>

      <div className={styles.pageNumber}>
        <p>
          {`${pagesStartEndData?.startPage} - ${(currentPage - 1) * pageSize + table.getRowModel().rows.length} of ${total} `}
        </p>
        <button
          type="button"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {/* <ArrowLineLeft size={16} className="" /> */} left
        </button>
        <button
          type="button"
          onClick={() => table.previousPage()}
        >
          left
        </button>

        {/* <div className="mx-4 flex"> */}
        {pageNumbers.map((pageNumber, i) =>
          pageNumber === "..." ? (
            <button
              type="button"
              onClick={() => {
                handleDotPageChange(i);
              }}
              key={pageNumber}
            >
              &hellip;
            </button>
          ) : (
            <div key={pageNumber}>
              {pageNumber === table.getState().pagination.pageIndex + 1 ? (
                <button
                  type="button"
                // className="bg-blue-600 text-gray-600"
                >
                  {pageNumber}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => table.setPageIndex((pageNumber as number) - 1)}
                >
                  {pageNumber}
                </button>
              )}
            </div>
          ),
        )}
        {/* </div> */}
        <button
          type="button"
          onClick={() => table.nextPage()}
          className={!table.getCanNextPage() ? "cursor-not-allowed " : "cursor-pointer "}
          disabled={!table.getCanNextPage()}
          data-testid="next-page"
        >
          right
        </button>
        <button
          type="button"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className={!table.getCanNextPage() ? "cursor-not-allowed" : "cursor-pointer"}
          disabled={!table.getCanNextPage()}
        >
          right
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
