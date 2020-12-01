import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./redux";
import { Row, Col } from "antd";
import User from "./User";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users);
  return (
    <div>
      <Row justify='center'>
        <Col span={20}>
          <User users={users} />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
