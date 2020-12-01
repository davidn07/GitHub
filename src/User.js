import React from "react";
import { Row, Col, Card, Avatar, Typography, Spin } from "antd";
import { Link } from "react-router-dom";

const User = ({ users }) => {
  const { Title, Paragraph } = Typography;
  return (
    <div>
      <Row justify='center' gutter={[12, 12]}>
        {users && users.length > 0 ? (
          users.map((user, id) => {
            return (
              <Col key={id} xs={{ span: 20 }} md={{ span: 8 }}>
                <Link
                  to={{
                    pathname: "/Details",
                    state: {
                      user: user,
                    },
                  }}
                >
                  <Card style={{ width: 300, height: 300 }}>
                    <Row justify='center'>
                      <Col>
                        <Avatar size={64} src={user.owner.avatar_url} />
                      </Col>
                    </Row>
                    <Row justify='center'>
                      <Col>
                        <Title level={3}>{user.name}</Title>
                      </Col>
                    </Row>
                    <Row justify='center'>
                      <Col span={20}>
                        <Paragraph>{user.description}</Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </Link>
              </Col>
            );
          })
        ) : (
          <Row justify='center'>
            <Col>
              {" "}
              <Spin />
            </Col>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default User;
