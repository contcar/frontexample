import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData, Logo, Tips } from "./utils/utils";

const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: []
});

class DataTable extends Component {
  constructor() {
    super();
    this.state = makeDefaultState();
    this.resetState = this.resetState.bind(this);
  }
  resetState() {
    this.setState(makeDefaultState());
  }
  componentDidMount() {
    this.setState({ data: makeData() });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <button className="btn btn-primary mb-2" onClick={this.resetState}>
            Reset State
          </button>
        </div>
        {/* <pre>
          <code>
            <strong>this.state ===</strong>{" "}
            {JSON.stringify(this.state, null, 2)}
          </code>
        </pre> */}
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  width: 170
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                }
              ]
            },
            {
              Header: "Prueba",
              columns: [
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            }
          ]}
          pivotBy={["lastName"]}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
          // Controlled props
          sorted={this.state.sorted}
          page={this.state.page}
          pageSize={this.state.pageSize}
          expanded={this.state.expanded}
          resized={this.state.resized}
          filtered={this.state.filtered}
          // Callbacks
          onSortedChange={sorted => this.setState({ sorted })}
          onPageChange={page => this.setState({ page })}
          onPageSizeChange={(pageSize, page) =>
            this.setState({ page, pageSize })
          }
          onExpandedChange={expanded => this.setState({ expanded })}
          onResizedChange={resized => this.setState({ resized })}
          onFilteredChange={filtered => this.setState({ filtered })}
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default DataTable;
