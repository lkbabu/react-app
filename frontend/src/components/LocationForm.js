import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Select } from "antd";

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const LocationForm = () => {
  const location = [
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      location_uniq_id: "tsa906",
      exists: true,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 167,
      tsa_loc_name: "Bahaddarhat",
      location_uniq_id: "tsa699",
      exists: true,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 188,
      tsa_loc_name: "Gulshan",
      location_uniq_id: "tsa700",
      exists: true,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 202,
      tsa_loc_name: "Kuril",
      location_uniq_id: "tsa701",
      exists: true,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 339,
      tsa_loc_name: "Dhaka",
      location_uniq_id: "cc1",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 354,
      tsa_loc_name: "Test Loc 3",
      location_uniq_id: "tsa354",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 355,
      tsa_loc_name: "test location",
      location_uniq_id: "tsa355",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 362,
      tsa_loc_name: "test location ",
      location_uniq_id: "tsa362",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 371,
      tsa_loc_name: "Testing",
      location_uniq_id: "tsa101",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 342,
      distribution_point: "Badda",
      tsa_loc_id: 135,
      tsa_loc_name: "Vatara",
      location_uniq_id: "tsa702",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 342,
      distribution_point: "Badda",
      tsa_loc_id: 172,
      tsa_loc_name: "Azimpur",
      location_uniq_id: "tsa698",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 342,
      distribution_point: "Badda",
      tsa_loc_id: 339,
      tsa_loc_name: "Dhaka",
      location_uniq_id: "cc1",
      exists: false,
    },
    {
      region_id: 1,
      region: "Dhaka",
      area_id: 2,
      area: "Dhaka Central",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 342,
      distribution_point: "Badda",
      tsa_loc_id: 355,
      tsa_loc_name: "test location",
      location_uniq_id: "tsa355",
      exists: false,
    },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      //   labelCol={{
      //     span: 8,
      //   }}
      //   wrapperCol={{
      //     span: 16,
      //   }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[8, 16]}>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="Please select your Region"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="Please select your Area"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="Please select Distribution house"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="Please select territory"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="please select your distribution point"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item>
            <Select
              showSearch
              placeholder="please select your TSA"
              optionFilterProp="children"
            >
              {children}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LocationForm;

/*
<Form.Item
wrapperCol={{
  offset: 8,
  span: 16,
}}
>
<Button type="primary" htmlType="submit">
  Submit
</Button>
</Form.Item>

*/
