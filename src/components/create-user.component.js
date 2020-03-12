import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      lname: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeLname(e) {
    this.setState({
      lname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      lname: this.state.lname
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      lname: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Lname: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lname}
              onChange={this.onChangeLname}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
