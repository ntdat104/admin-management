import React, { Component } from "react";
import "../css/App.css";
import SearchForm from "./SearchForm";
import TableResult from "./TableResult";
import AddUser from "./AddUser";
import dataUser from "../dataUser.json";
import EditUser from "./EditUser";

// localStorage.setItem("data", JSON.stringify(dataUser))
function checkDataFromLocalStorage(){
  if(localStorage.getItem("data")){
    return JSON.parse(localStorage.getItem("data"))
  } else {
    localStorage.setItem("data", JSON.stringify(dataUser))
    return dataUser
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: checkDataFromLocalStorage(),
      status: 0, //* 0 - default; 1 - addUser; 2 - editUser,
    };
  }

  checkStatus() {
    switch (this.state.status) {
      case 0: //* trạng thái default
        return (
          <button
            type="button"
            className="addUserBtn"
            onClick={() => this.setState({ status: 1 })}
          >
            Thêm mới
          </button>
        );
      case 1: //* trạng thái addUser
        return <AddUser getNewUser={(user) => this.getNewUser(user)} />;
      case 2: //* trạng thái editUser
        return (
          <EditUser
            getUserUpdate={(user) => this.getUserUpdate(user)}
            userEdit={this.state.userEdit}
          />
        );
      default:
        break;
    }
  }

  getNewUser(user) {
    let newData = this.state.data;
    newData.push(user);
    this.setState({
      data: newData,
      status: 0,
    });
    localStorage.setItem("data", JSON.stringify(newData))
  }

  getTextSearch(text) {
    let users = [];
    if (text) {
      this.state.data.forEach((item) => {
        if (item.name.indexOf(text) !== -1) {
          users.push(item);
        }
      });
      this.setState({
        dataSearch: users,
      });
    } else {
      this.setState({
        dataSearch: null,
      });
    }
  }

  checkDataSearch() {
    if (this.state.dataSearch) {
      return this.state.dataSearch;
    } else return this.state.data;
  }

  getUserEdit(user, index) {
    if (this.state.status === 2) {
      alert("Sai cú pháp. Bạn phải lưu dữ liệu trước khi sửa");
    } else {
      this.setState({
        userEdit: user,
        indexEdit: index,
        status: 2,
      });
    }
  }

  getUserUpdate(user) {
    let newData = this.state.data;
    newData[this.state.indexEdit] = user;
    this.setState({
      data: newData,
      status: 0,
    });
    localStorage.setItem("data", JSON.stringify(newData))
  }

  getUserDelete(user, index) {
    let newData = this.state.data;
    newData.splice(index, 1);
    this.setState({
      data: newData,
      status: 0,
    });
    alert(`Đối tượng vừa xóa là: ${user.name}, dòng thứ ${index + 1}`);
    localStorage.setItem("data", JSON.stringify(newData))
  }

  render() {
    return (
      <div className="App">
        <SearchForm getTextSearch={(text) => this.getTextSearch(text)} />
        {this.checkStatus()}
        <TableResult
          getUserDelete={(user, index) => this.getUserDelete(user, index)}
          getUserEdit={(user, index) => this.getUserEdit(user, index)}
          data={this.checkDataSearch()}
        />
      </div>
    );
  }
}

export default App;
