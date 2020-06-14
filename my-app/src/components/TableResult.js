import React, { Component } from "react";
import "../css/TableResult.css";
import ResultRow from "./ResultRow";

class TableResult extends Component {
  mappingData() {
    return this.props.data.map((user, index) => (
      <ResultRow
        getUserDelete={() => this.props.getUserDelete(user, index)}
        getUserEdit={() => this.props.getUserEdit(user, index)}
        key={index}
        stt={index}
        data={user}
      />
    ));
  }

  render() {
    return (
      <table className="TableResult">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
          {this.mappingData()}
        </tbody>
      </table>
    );
  }
}

export default TableResult;
