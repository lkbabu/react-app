import React from "react";
import { Card, Col, Row, InputNumber } from "antd";

function OutletCard() {
  return (
    <div>
      <Row gutter={[15, 15]}>
        <Col>
          <Card
            style={{
              width: 300,
              height: 150,
              marginTop: 30,
            }}
          >
            <p>Total MVP outlet :4,827</p>
            <p>points per Outlet :8</p>
            <p>Total Allocated point MVP : 38,616</p>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
              height: 150,
              marginTop: 30,
            }}
          >
            <p>Total MVP outlet :4,827</p>
            <p>points per Outlet :8</p>
            <p>Total Allocated point MVP : 38,616</p>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
              height: 150,
              marginTop: 30,
            }}
          >
            <p>Total MVP outlet :4,827</p>
            <p>points per Outlet :8</p>
            <p>Total Allocated point MVP: 38,616</p>
          </Card>
        </Col>
      </Row>
      <Card
        title={<p style={{ color: "green" }}>December</p>}
        style={{
          width: 300,
          height: 150,
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        <InputNumber style={{ width: "130px" }} />
      </Card>
    </div>
  );
}

export default OutletCard;
