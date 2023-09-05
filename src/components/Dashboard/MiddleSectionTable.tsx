import React from 'react';
import {TableData} from "./TableData";
import { useTable, HeaderGroup, Row, Cell } from 'react-table';
import './MiddleSectionTable.scss';
import Bar from "../../asset/Bar.svg"
type Data = {
  ORGANIZATION: string;
  USERNAME: string;
  EMAIL: string;
  PHONENUMBER: string;
  DATEJOINED: string;
  STATUS: string;
};

const MiddleSectionTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "ORGANIZATION",
        accessor: "ORGANIZATION" as keyof Data,
      },
      {
        Header: "USERNAME",
        accessor: "USERNAME" as keyof Data,
      },
      {
        Header: "EMAIL",
        accessor: "EMAIL" as keyof Data,
      },
      {
        Header: "PHONENUMBER",
        accessor: "PHONENUMBER" as keyof Data,
      },
      {
        Header: "DATE JOINED",
        accessor: "DATEJOINED" as keyof Data,
      },
      {
        Header: "STATUS",
        accessor: "STATUS" as keyof Data,
      },
     
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Data>({
    columns,
    data: TableData,
  });

  console.log(TableData);

  return (
    <div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='table_container'>{column.render('Header')}<img src={Bar} alt="" />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} >
          {rows.map((row: Row<Data>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} >
                {row.cells.map((cell: Cell<Data>) => {
                  let cellClassName = 'child';

                  if (cell.column.id === 'STATUS') {

                    switch (cell.value) {
                      case 'Inactive':
                        cellClassName += ' inactive';
                        break;
                      case 'Pending':
                        cellClassName += ' pending';
                        break;
                      case 'Blacklisted':
                        cellClassName += ' blacklisted';
                        break;
                      case 'Active':
                        cellClassName += ' active';
                        break;
                      default:
                        break;
                    }
                  }

                  return (
                    <td {...cell.getCellProps()} className={cellClassName}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MiddleSectionTable;
