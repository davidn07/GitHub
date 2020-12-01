import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import Users from "./Users";
import UserDetails from "./UserDetails";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Col, Row } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const App = () => {
  return (
    <Provider store={store}>
      <Row justify='center' style={{ marginBottom: "30px", marginTop: "30px" }}>
        <Col>
          <Link to='/'>
            <GithubOutlined style={{ fontSize: "40px" }} />
          </Link>{" "}
        </Col>
      </Row>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/Details' component={UserDetails} />
      </Switch>
    </Provider>
  );
};

export default App;
