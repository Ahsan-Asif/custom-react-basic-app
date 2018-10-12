import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Alert, Table, Pager } from "react-bootstrap";
import { fetchUser } from "../action/userAction.js";
import userReducer from "../reducers/userReducer.js";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log("this the url of app", this.props.match);
    console.log(this.props);
    const { users } = this.props;
    if (this.props.isLoading) {
      return <div className="text-center"> Loading </div>;
    }
    return (
      <div>
        <Alert className="text-center" bsStyle="warning">
          <strong>Users Of Data!</strong>
        </Alert>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>LOGIN</th>
              <th>NODE_ID</th>
              <th>Avatar_Url</th>
            </tr>
          </thead>
          <tbody>
            {(users || []).map(({ id, login, node_id, avatar_url }) => (
              <tr key={id}>
                <td>
                  <Link to={`${this.props.match.url}${id}`}>{id}</Link>
                </td>
                <td>
                  <Link to={`${this.props.match.url}${login}`}>{login}</Link>
                </td>
                <td>{node_id}</td>
                <td>{avatar_url}</td>
              </tr>
            ))}
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
    users: state.user.users,
    isLoading: state.user.isLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
