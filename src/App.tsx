import { useState } from "react";
import { Select, DatePicker, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { mockBookings } from "./mockData";
import type { Booking, BookingStatus } from "./types";
import type { Dayjs } from "dayjs";
import "./App.css";

const statusMap: Record<BookingStatus, { label: string; color: string }> = {
  booked: { label: "已預約", color: "blue" },
  arrived: { label: "已到店", color: "green" },
  "no-show": { label: "未到", color: "orange" },
  cancelled: { label: "已取消", color: "default" },
};

function App() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const changeStatus = (id: number, newStatus: BookingStatus) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
    );
  };
  const filteredBookings = selectedDate
    ? bookings.filter((b) => b.date === selectedDate.format("YYYY-MM-DD"))
    : bookings;
  const columns: ColumnsType<Booking> = [
    { title: "姓名", dataIndex: "name" },
    { title: "電話", dataIndex: "phone" },
    { title: "日期", dataIndex: "date" },
    { title: "時間", dataIndex: "time" },
    { title: "大人", dataIndex: "adult" },
    { title: "小孩", dataIndex: "kid" },
    {
      title: "狀態",
      dataIndex: "status",
      render: (status: BookingStatus) => (
        <Tag color={statusMap[status].color}>{statusMap[status].label}</Tag>
      ),
    },
    {
      title: "操作",
      render: (_, record) => (
        <Select
          value={record.status}
          style={{ width: 100 }}
          options={[
            { value: "booked", label: "已預約" },
            { value: "arrived", label: "已到店" },
            { value: "no-show", label: "未到" },
            { value: "cancelled", label: "已取消" },
          ]}
          onChange={(value) => changeStatus(record.id, value)}
        />
      ),
    },
  ];
  return (
    <>
      <div>
        <h1>松風訂位後台管理</h1>
        <DatePicker
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <Table dataSource={filteredBookings} columns={columns} rowKey={"id"} />
      </div>
    </>
  );
}

export default App;
