import React, { Component } from "react";
import "../css/EditUser.css";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userEdit.name,
      tel: this.props.userEdit.tel,
      permission: this.props.userEdit.permission,
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      name: this.state.name,
      tel: this.state.tel,
      permission: parseInt(this.state.permission),
    };
    this.props.getUserUpdate(user);
  }

  render() {
    return (
      <form className="EditUser" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="name"
          type="text"
          defaultValue={this.state.name}
          placeholder="Tên User"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <input
          name="tel"
          type="number"
          defaultValue={this.state.tel}
          placeholder="Điện thoại"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <select
          name="permission"
          defaultValue={this.state.permission}
          onChange={(e) => this.handleChange(e)}
          required
        >
          <option value="">Chọn quyền mặc định</option>
          <option value={1}>Admin</option>
          <option value={2}>Manager</option>
          <option value={3}>User</option>
        </select>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EditUser;
