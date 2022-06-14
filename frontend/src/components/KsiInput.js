import React from "react";
import { InputNumber, Row, Col, Button } from "antd";

function KsiInput() {
  return (
    <>
      <h1>November KPI</h1>
      <Row>
        <Col lg={6}>
          <p>Points for MVP</p>
          <InputNumber style={{ width: "300px" }} />
        </Col>
        <Col lg={6}>
          <p>Points for VP</p>
          <InputNumber style={{ width: "300px" }} />
        </Col>
        <Col lg={6}>
          <p>Points for P</p>
          <InputNumber style={{ width: "300px" }} />
        </Col>
      </Row>

      <Button type="primary" className="center">
        Submit
      </Button>
    </>
  );
}

export default KsiInput;
