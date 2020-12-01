import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./redux";
import { Row, Col} from "antd";
import User from './User'

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  
  console.log(users);
  return (
    <div>
      <Row justify='center'>
        <Col span={20}>
          <User users={users}/>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
