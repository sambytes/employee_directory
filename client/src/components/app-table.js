import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const AppTable = ({ data }) => {
    const columns = [{
        id: 'firstName',
        Header: 'First Name',
        accessor: d => d.name.first
    }, {
        id: 'lastName',
        Header: 'Last Name',
        accessor: d => d.name.last
    }, {
        id: 'city',
        Header: 'City',
        accessor: d => d.location.city
    }, {
        id: 'state',
        Header: 'State',
        accessor: d => d.location.state
    }, {
        Header: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Email',
        accessor: 'email'
    }]
    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
                className="-striped -highlight"
            />
        </div>
    );
}

export default AppTable;