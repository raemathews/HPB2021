import React from 'react';
import { useTable } from 'react-table';
import TableControls from './TableControls.js';
import { StyledTable } from './Table.styled.js'

export default function DataTable({ data }) {

    const columns = React.useMemo(
        () => [
                    {
                        Header: 'County',
                        accessor: 'county',
                    },
                    {
                        Header: 'Wasted Vaccines',
                        accessor: 'totalCount',
                    },
                ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <StyledTable>
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr className="cell" {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </StyledTable>
    );
}

