import React, { Component } from "react";
import "../css/ResultRow.css";

class ResultRow extends Component {
  checkPermission() {
    switch (this.props.data.permission) {
      case 1:
        return <td>Admin</td>;
      case 2:
        return <td>Manager</td>;
      case 3:
        return <td>User</td>;
      default:
        break;
    }
  }
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.tel}</td>
        {this.checkPermission()}
        <td>
          <button
            className="ResultRowBtn"
            onClick={() => this.props.getUserEdit()}
          >
            Sửa
          </button>
          <button
            className="ResultRowBtn"
            onClick={() => this.props.getUserDelete()}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ResultRow;
