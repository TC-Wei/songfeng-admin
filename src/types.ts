// 已預約|已到店|未到|已取消
export type BookingStatus = "booked" | "arrived" | "no-show" | "cancelled";

export interface Booking {
  id: number;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  adult: number;
  kid: number;
  note?: string;
  status: BookingStatus;
}
