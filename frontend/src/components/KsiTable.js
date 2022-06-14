import React from "react";
import {
  EyeOutlined,
  EnvironmentOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Table, Switch, Button, Tag } from "antd";
import TableText from "./TableText";

const KsiTable = ({ onViewChange }) => {
  const toggleButton = () => {
    onViewChange(true);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      width: "10%",
    },
    {
      title: "Allocated points",
      dataIndex: "points",
      width: "10%",

      key: "points",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "10%",

      key: "status",
      render: () => <Tag color="red">Exhausted</Tag>,
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",

      key: "status",
      render: () => (
        <Button type="primary" onClick={toggleButton}>
          Create
        </Button>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      month: "January",
      points: "541354156",
    },
    {
      key: "2",
      month: "February",
      points: "217465413213",
    },
    {
      key: "3",
      month: "March",
      points: "25412315",
    },
    {
      key: "4",
      month: "April",
      points: "24210154",
    },
    {
      key: "5",
      month: "May",
      points: "2414546841",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default KsiTable;
