import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { defaultData } from './defaultData';

// Create a column helper instance
const columnHelper = createColumnHelper();

const defaultColumns = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    minSize: 250,
    size: 270, //set column size for this column
  }),
  columnHelper.accessor('age', {
    header: 'Age',
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    footer: (props) => {
      // Calculate the total visits
      const totalVisits = props.table
        .getFilteredRowModel()
        .rows.reduce((sum, row) => sum + row.original.visits, 0);
      return <>Total: {totalVisits}</>;
    },
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
  }),
  columnHelper.accessor('title', {
    header: 'Title',
  }),
];

const UsersTable = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const [columns] = React.useState(() => [...defaultColumns]);

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      minSize: 60,
      maxSize: 800,
    },
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   */
  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  //demo purposes
  const [enableMemo, setEnableMemo] = React.useState(true);

  return (
    <>
      {/* Here in the <table> equivalent element (surrounds all table head and data cells), we will define our CSS variables for column sizes */}
      <div
        {...{
          className: 'divTable',
          style: {
            ...columnSizeVars, //Define column sizes on the <table> element
            width: table.getTotalSize(),
          },
        }}
      >
        <div className="thead">
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              {...{
                key: headerGroup.id,
                className: 'tr',
              }}
            >
              {headerGroup.headers.map((header) => (
                <div
                  {...{
                    key: header.id,
                    className: 'th',
                    style: {
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onDoubleClick: () => header.column.resetSize(),
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* When resizing any column we will render this special memoized version of our table body */}
        {table.getState().columnSizingInfo.isResizingColumn ? (
          <MemoizedTableBody table={table} />
        ) : (
          <TableBody table={table} />
        )}
        <div className="tfoot">
          {table.getFooterGroups().map((footerGroup) => (
            <div
              {...{
                key: footerGroup.id,
                className: 'tr',
              }}
            >
              {footerGroup.headers.map((header) => (
                <div
                  {...{
                    key: header.id,
                    className: 'th',
                    style: {
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onDoubleClick: () => header.column.resetSize(),
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//un-memoized normal table body component - see memoized version below
function TableBody({ table }) {
  return (
    <div
      {...{
        className: 'tbody',
      }}
    >
      {table.getRowModel().rows.map((row) => (
        <div
          {...{
            key: row.id,
            className: 'tr',
          }}
        >
          {row.getVisibleCells().map((cell) => {
            return (
              <div
                {...{
                  key: cell.id,
                  className: 'td',
                  style: {
                    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                  },
                }}
              >
                {cell.renderValue()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

//special memoized wrapper for our table body that we will use during column resizing
export const MemoizedTableBody = React.memo(
  TableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
);

export default UsersTable;
