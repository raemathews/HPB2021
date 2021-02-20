import React from 'react';
import { useTable } from 'react-table';

export default function DataTable({ data }) {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Locations With Highest Waste',
                columns: [
                    {
                        Header: '#',
                        accessor: 'rank',
                    },
                    {
                        Header: 'Distribution Center',
                        accessor: 'distributionCenter',
                    },
                    {
                        Header: 'Jurisdiction',
                        accessor: 'jurisdiction',
                    },
                    {
                        Header: 'Vaccines Wasted',
                        accessor: 'wasted',
                    },
                ],
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
    );
}

