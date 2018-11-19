import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { withRouter } from 'react-router-dom';

class AppTable extends Component {

    columns = [{
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
    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.data}
                    columns={this.columns}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo) => {
                        return {
                          onClick: (e) => {
                            if (rowInfo) {
                                this.props.history.push(`/employee/${rowInfo.original._id}`);
                            }
                          }
                        };
                      }}
                />
            </div>
        );
    }
}

export default withRouter(AppTable);