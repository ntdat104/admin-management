import React, { Component } from "react";
import "../css/SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
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
    this.props.getTextSearch(this.state.textSearch);
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="textSearch"
          type="text"
          placeholder="Nhập tên cần tìm"
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit">Tìm</button>
      </form>
    );
  }
}

export default SearchForm;
