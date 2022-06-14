import React, { useState } from "react";
import {
  DatePicker,
  Space,
  InputNumber,
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
} from "antd";
import "../App.css";
import KsiTable from "../components/KsiTable";
import KsiInput from "../components/KsiInput";
import OutletCard from "../components/OutletCard";

function KpiScreen() {
  const [showButton, setShowButton] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [pointsExists, setPointExists] = useState(false);
  const [form] = Form.useForm();
  const allocatedpoints = [
    {
      year: "2021",
      points: 1923789012,
    },
    {
      year: "2023",
      points: 1923789012,
    },
    {
      year: "2024",
      points: 1923789012,
    },
    {
      year: "2025",
      points: 1923789012,
    },
  ];
  const onChange = (date, dateString) => {
    const hasYear = allocatedpoints.filter((x) => x.year === dateString);
    hasYear.length > 0 ? setPointExists(true) : setPointExists(false);
    console.log(hasYear);

    form.setFieldsValue({ ["points"]: hasYear[0].points });
    setShowButton(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col xs={24} lg={4}>
            <Form.Item
              label="Year"
              name="year"
              rules={[
                {
                  required: true,
                  message: "Please enter a year",
                },
              ]}
            >
              <DatePicker onChange={onChange} picker="year" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={5}>
            <Form.Item
              label="Allocated points"
              name="points"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <InputNumber
                onChange={() => setShowButton(true)}
                style={{ width: "130px" }}
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            {showButton ? <Button type="primary">Submit</Button> : ""}
          </Col>
        </Row>
      </Form>
      {pointsExists ? <KsiTable onViewChange={setShowInput} /> : ""}

      {showInput ? <KsiInput /> : ""}

      <OutletCard />
    </div>
  );
}

export default KpiScreen;
