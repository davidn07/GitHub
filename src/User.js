import React, { useState } from "react";
import { Row, Col, Card, Avatar, Typography, Spin, Input } from "antd";
import { Link } from "react-router-dom";

const User = ({ users }) => {
  const { Title, Paragraph } = Typography;
  const [search, setSearch] = useState("");

  const filterUsers =
    users &&
    users.filter((user) => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  return (
    <div>
      <Row justify='center'>
        <Col span={16}>
          <Input
            value={search}
            placeholder='Search here for GitHub Users'
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <Row justify='center' gutter={[12, 12]} style={{ marginTop: "30px" }}>
        {filterUsers && filterUsers.length > 0 ? (
          filterUsers.map((user, id) => {
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
