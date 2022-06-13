import React from "react";
import {
  EyeOutlined,
  EnvironmentOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Table, Switch, Button } from "antd";
import TableText from "./TableText";

const DataTable = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    {
      title: "Document Name",
      dataIndex: "name",
      key: "name",
      width: "10%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "10%",

      key: "description",
    },
    {
      title: "Seen Status",
      dataIndex: "seenstatus",
      width: "10%",
      key: "seenstatus",
    },
    {
      title: "Document unseen locations",
      dataIndex: "unseenlocation",
      width: "30%",
      key: "unseenlocation",
      render: (text) => <TableText arr={text} />,
    },
    {
      title: "Status",
      dataIndex: "currstatus",
      key: "currstatus",
      width: "10%",
      render: () => <Switch defaultChecked onChange={onChange} size="small" />,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
      render: () => (
        <>
          <Button
            type="text"
            shape="circle"
            icon={<EyeOutlined />}
            size="small"
          />
          <Button
            type="text"
            shape="circle"
            icon={<EnvironmentOutlined />}
            size="small"
          />
          <Button
            type="text"
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
          />
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Tika Sonod",
      description: "zbdfdhb",
      seenstatus: "0/95",
      unseenlocation: [
        "tsa972",
        "tsa914",
        "tsa751",
        "tsa746",
        "tsa732",
        "tsa715",
        "tsa714",
        "tsa745",
        "tsa908",
        "tsa973",
        "tsa698",
        "tsa915",
        "tsa697",
        "tsa723",
        "tsa700",
        "tsa916",
        "tsa917",
        "tsa750",
        "tsa741",
        "tsa720",
        "tsa921",
        "tsa722",
        "tsa742",
        "tsa622",
        "tsa738",
        "tsa756",
        "tsa701",
        "tsa730",
        "tsa1015",
        "tsa762",
        "tsa716",
        "tsa704",
        "tsa721",
        "tsa726",
        "tsa749",
        "tsa708",
        "tsa744",
        "tsa705",
        "tsa709",
        "tsa893",
        "tsa912",
        "tsa748",
        "tsa747",
        "tsa911",
        "tsa733",
        "tsa909",
        "tsa728",
        "tsa906",
        "tsa760",
        "tsa971",
        "tsa1003",
        "tsa734",
        "tsa913",
        "tsa621",
        "tsa707",
        "tsa712",
        "tsa713",
        "tsa711",
        "tsa718",
        "tsa994",
        "tsa993",
        "tsa986",
        "tsa985",
        "tsa907",
        "tsa719",
        "tsa727",
        "tsa910",
        "tsa736",
        "tsa737",
        "tsa724",
        "tsa706",
        "tsa920",
        "tsa884",
        "tsa919",
      ],
      currstatus: "on",
      action: "",
    },
    {
      key: "2",
      name: "Example Document 1",
      description: "sjkhfj sldkfeaw",
      seenstatus: "0/1",
      unseenlocation: ["tsa627"],
      currstatus: "",
      action: "",
    },
    {
      key: "3",
      name: "Example Document 1",
      description: "fsdg lkdfkgmodf",
      seenstatus: "0/95",
      unseenlocation: [],
      currstatus: "",
      action: "",
    },
    {
      key: "4",
      name: "Example Document 1",
      description: "swgsdg dhgf",
      seenstatus: "0/95",
      unseenlocation: [],
      currstatus: "",
      action: "",
    },
    {
      key: "5",
      name: "Example Document 1",
      description: "asfasd sgsdgv",
      seenstatus: "0/95",
      unseenlocation: ["tsa631", "tsa803"],
      currstatus: "",
      action: "",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
