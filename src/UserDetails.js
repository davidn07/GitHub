import React, { useEffect } from "react";
import { Row, Col, Avatar } from "antd";
import { connect } from "react-redux";
import { getContributors } from "./redux";
import Contributors from "./Contributors";

const UserDetails = ({
  contributors,
  getContributors,
  location: {
    state: { user },
  },
}) => {
  useEffect(() => {
    getContributors(user);
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
        <Col xs={{ span: 20 }} md={{ span: 14 }}>
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

const mapStateToProps = (state) => {
  return {
    contributors: state.contributors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContributors: (user) => dispatch(getContributors(user.contributors_url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
