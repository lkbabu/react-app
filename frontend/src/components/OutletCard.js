import React from "react";
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
} from "antd";
import KpiForm from "./KpiForm";

const OutletCard = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;
  const options = [
    "price compliance",
    "illicit restriction",
    "lifting frequency",
    "POSM Rentation",
    "Priotized Communication ",
  ];
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
      <Row>
        <Col lg={6} xs={24}>
          <Card
            title={<p style={{ color: "green" }}>December</p>}
            style={{
              width: 300,
              height: 150,
              marginTop: 30,
              marginBottom: 40,
            }}
          >
            <Select
              mode="multiple"
              showSearch
              showArrow
              allowClear
              maxTagCount={1}
              style={{
                width: "100%",
              }}
              placeholder="select one KSI"
              onChange={(val) => {
                console.log(val);
              }}
              optionLabelProp="label"
            >
              {options.map((el, i) => {
                return <Option key={el}>{el}</Option>;
              })}
            </Select>
          </Card>
        </Col>

        <Col lg={15} xs={24}>
          <Card
            style={{
              marginTop: 30,
              maxWidth: "100%",
              height: 150,
            }}
          >
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
            />
          </Card>
        </Col>

        <Col lg={14}>
          <KpiForm />
        </Col>
      </Row>
    </div>
  );
};

export default OutletCard;
