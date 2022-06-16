import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Select,
  Empty,
  InputNumber,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Space,
} from "antd";

const KpiForm = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const name = "co";
  return (
    <Card>
      <Form autoComplete="off">
        <Row>
          <Col>
            {" "}
            {name === "co" ? (
              <Form.Item label="price compliance" name="username">
                <InputNumber style={{ width: 192, borderRadius: 4 }} />
              </Form.Item>
            ) : (
              ""
            )}
          </Col>

          <Col
            style={{
              marginLeft: 20,
            }}
          >
            {" "}
            {name === "co" ? (
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>Binary</Radio>
                  <Radio value={2}>Baseline</Radio>
                </Space>
              </Radio.Group>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {name === "co" ? (
            <Form.Item label="Assigned point per outlet" name="per">
              <InputNumber style={{ width: 192, borderRadius: 4 }} />
            </Form.Item>
          ) : (
            ""
          )}
          {name === "co" ? (
            <Form.Item label="assigned point for total outlet" name="total">
              <InputNumber style={{ width: 192, borderRadius: 4 }} />
            </Form.Item>
          ) : (
            ""
          )}
        </div>
      </Form>
    </Card>
  );
};

export default KpiForm;
