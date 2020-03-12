import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      lname: '',
      email: ''
    };
  }

  onChangeFname(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeLname(e) {
    this.setState({
      lname: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      lname: this.state.lname,
      email: this.state.email
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      lname: '',
      email: ''
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-3 col-sm-4 col-md-3 col-lg-3 col-xl-5 auth-inner">
          <form onSubmit={this.onSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={this.state.fname}
                onChange={this.onChangeFname}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={this.state.lname}
                onChange={this.onChangeLname}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
