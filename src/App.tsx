import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { mockBookings } from "./mockData";
import type { Booking } from "./types";
import "./App.css";

const columns: ColumnsType<Booking> = [
  { title: "姓名", dataIndex: "name" },
  { title: "電話", dataIndex: "phone" },
  { title: "日期", dataIndex: "date" },
  { title: "時間", dataIndex: "time" },
  { title: "大人", dataIndex: "adult" },
  { title: "小孩", dataIndex: "kid" },
  { title: "狀態", dataIndex: "status" },
];

function App() {
  return (
    <>
      <div>
        <h1>松風訂位後台管理</h1>
        <Table dataSource={mockBookings} columns={columns} rowKey={"id"} />
      </div>
    </>
  );
}

export default App;
