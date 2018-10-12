import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { SpecificUser } from "../action/userAction.js";
import { Table, Pager } from "react-bootstrap";

class UserDetail extends Component {
  componentDidMount() {
    this.props.SpecificUser(this.props.match.url);
  }
  render() {
    console.log("this the url of Userdetail", this.props.match);
    const { user } = this.props;
    if (this.props.isLoading) {
      return <div className="text-center"> Loading </div>;
    }
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>LOGIN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{user.node_id}</td>
            </tr>
          </tbody>
        </Table>
        <Pager>
          <Pager.Item href="#">Previous</Pager.Item>{" "}
        </Pager>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.test.user,
    isLoading: state.test.isLoading
  };
};

export default connect(
  mapStateToProps,
  { SpecificUser }
)(UserDetail);
