import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col, Select } from "antd";

const { Option } = Select;

const LocationForm = () => {
  const [area, setArea] = useState([]);
  const [distributionhouse, setdistributionhouse] = useState([]);
  const [territory, setTerritory] = useState([]);
  const [distributionpoint, setDistributionpoint] = useState([]);
  const [tsa, setTsa] = useState([]);
  const [form] = Form.useForm();

  const children = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const arr = [
    {
      region: "dhaka",
      region_id: 1,
      area: "bongsal",
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      area_id: 1,
    },
    {
      region: "dhaka",
      region_id: 1,
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      area: "niketon",
      area_id: 2,
    },
    {
      region: "dhaka",
      region_id: 1,
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      area: "mohkhali",
      area_id: 3,
    },
    {
      region: "ctg",
      region_id: 2,
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      area: "gec",
      area_id: 1,
    },
    {
      region: "ctg",
      region_id: 2,
      territory_id: 3,
      territory: "Gulshan",
      dsid: 1,
      distribution_house: "Agrani Trading Corporation, Gulshan",
      dpid: 1,
      distribution_point: "Gulshan",
      tsa_loc_id: 89,
      tsa_loc_name: "Niketon",
      area: "new market",
      area_id: 2,
    },
  ];

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
      distribution_house: "Agrani Trading Corporation, mohakhali",
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
      distribution_house: "Agrani Trading Corporation, banai",
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

  const populatebasedOInRegion = (region_id, arr) => {
    const area = arr.filter((x) => x.region_id === region_id);
    setArea(area);
    console.log("form ", area);

    form.setFieldsValue({ ["area"]: area.map((x) => x.area_id) });
    form.setFieldsValue({ ["distribution"]: area.map((x) => x.dsid) });
    form.setFieldsValue({ ["territory"]: area.map((x) => x.territory_id) });
    form.setFieldsValue({ ["point"]: area.map((x) => x.dpid) });
    form.setFieldsValue({ ["tsa"]: area.map((x) => x.tsa_loc_name) });
  };

  return (
    <Form
      name="basic"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[8, 16]}>
        <Col xs={24} lg={8}>
          <Form.Item name="region">
            <Select
              showSearch
              placeholder="Please select your Region"
              optionFilterProp="children"
              onChange={(e) => populatebasedOInRegion(e, arr)}
            >
              {/* {children} */}
              {arr
                .filter(
                  (x, i) =>
                    i === arr.findIndex((y) => y.region_id === x.region_id)
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.region_id}>
                      {x.region}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item name="area">
            <Select
              showSearch
              placeholder="Please select your Area"
              optionFilterProp="children"
              mode="multiple"
            >
              {/* {children} */}
              {area
                .filter(
                  (x, i) => arr.findIndex((y) => y.area_id === x.area_id) === i
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.area_id}>
                      {x.area}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item name="distribution">
            <Select
              showSearch
              placeholder="Please select Distribution house"
              optionFilterProp="children"
              mode="multiple"
            >
              {area
                .filter(
                  (x, i) => arr.findIndex((y) => y.area_id === x.area_id) === i
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.area_id}>
                      {x.distribution_house}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item name="territory">
            <Select
              showSearch
              placeholder="Please select territory"
              optionFilterProp="children"
              mode="multiple"
            >
              {area
                .filter(
                  (x, i) => arr.findIndex((y) => y.area_id === x.area_id) === i
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.area_id}>
                      {x.territory}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item name="point">
            <Select
              showSearch
              placeholder="please select your distribution point"
              optionFilterProp="children"
              mode="multiple"
            >
              {area
                .filter(
                  (x, i) => arr.findIndex((y) => y.area_id === x.area_id) === i
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.area_id}>
                      {x.distribution_point}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item name="tsa">
            <Select
              showSearch
              placeholder="please select your TSA"
              optionFilterProp="children"
              mode="multiple"
            >
              {area
                .filter(
                  (x, i) => arr.findIndex((y) => y.area_id === x.area_id) === i
                )
                .map((x, i) => {
                  return (
                    <Option key={i} value={x.area_id}>
                      {x.tsa_loc_name}
                    </Option>
                  );
                })}
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
