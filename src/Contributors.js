import React from "react";
import { Row, Col, Card, Avatar, Typography, Spin } from "antd";

const Contributors = ({ contributors }) => {
  const { Title, Paragraph } = Typography;

  return (
    <div>
      <Row justify='center'>
        <Col span={20}>
          <Row justify='center' gutter={[12, 12]} style={{ marginTop: "30px" }}>
            {contributors && contributors.length > 0 ? (
              contributors.map((contributor, id) => {
                return (
                  <Col key={id} xs={{ span: 20 }} md={{ span: 8 }}>
                    <Card style={{ width: 300, height: 300 }}>
                      <Row justify='center'>
                        <Col>
                          <Avatar size={64} src={contributor.avatar_url} />
                        </Col>
                      </Row>
                      <Row justify='center'>
                        <Col>
                          <Title level={3}>{contributor.login}</Title>
                        </Col>
                      </Row>
                      <Row justify='center'>
                        <Col span={20}>
                          <h3>Contributions : {contributor.contributions}</h3>
                        </Col>
                      </Row>
                    </Card>
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
        </Col>
      </Row>
    </div>
  );
};

export default Contributors;
