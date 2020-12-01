import React, { useEffect } from "react";
import { Row, Col, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getContributors } from "./redux";
import Contributors from "./Contributors";

const UserDetails = ({
  location: {
    state: { user },
  },
}) => {
  const contributors = useSelector((state) => state.contributors);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContributors(user.contributors_url));
  }, []);

  return (
    <div>
      <Row justify='center'>
        <Col>
          <Avatar size={100} src={user.owner.avatar_url} />
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <h3>{user.name}</h3>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <p>{user.description}</p>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <h2>List of Contributors</h2>
        </Col>
      </Row>
      <Contributors contributors={contributors} />
    </div>
  );
};

export default UserDetails;
