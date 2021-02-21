import React from 'react';
import { useTable } from 'react-table';
import TableControls from './TableControls.js';

export default function DataTable({ data }) {

    const columns = React.useMemo(
        () => [
                    {
                        Header: '#',
                        accessor: 'rank',
                    },
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
        <>
        <table {...getTableProps()}>
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
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    );
}

