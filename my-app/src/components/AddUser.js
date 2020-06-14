import React, { Component } from "react";
import "../css/AddUser.css";

class AddUser extends Component {
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
    this.props.getNewUser(user);
  }

  render() {
    return (
      <form className="AddUser" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="name"
          type="text"
          placeholder="Tên User"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <input
          name="tel"
          type="number"
          placeholder="Điện thoại"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <select
          name="permission"
          onChange={(e) => this.handleChange(e)}
          required
        >
          <option value="">Chọn quyền mặc định</option>
          <option value={1}>Admin</option>
          <option value={2}>Manager</option>
          <option value={3}>User</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddUser;
