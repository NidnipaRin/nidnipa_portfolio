import { useState, useEffect } from "react";
import AdminForm from "../components/AdminForm";
import UserTable from "../components/UserTable";

//API URL กลาง ที่คุณนิติให้มา
const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

function Home() {
  // 1.ส่วนการจัดการสถานะภายใน Component
  //ส่วนของ UI เก็บสถานะการเลือกมุมมองหน้าจอ ("" = เริ่มต้น, "user" = โหมดผู้ใช้, "admin" = โหมดผู้ดูแลระบบ)
  const [sector, setSector] = useState("");

  //ส่วน Data เก็บรายการข้อมูลที่ดึงมาจาก API (ส่งไปที่ตาราง UserTable)
  const [members, setMembers] = useState([]);

  //ส่วน Form ตรงช่องๆที่ให้พิมพ์เพิ่ม เก็บค่าจากช่อง Input เพื่อเตรียมส่งไปสร้างข้อมูลใหม่ (ดูที่ AdminForm)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  // 2.ส่วนจัดการข้อมูลจาก API
  //ฟังก์ชันดึงข้อมูลสมาชิกแบบ Asynchronous
  const fetchMembers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMembers(data); // อัปเดต State เพื่อสั่งให้Render รายการใหม่
    } catch (err) {
      console.error("Fetch error:", err); // ดักจับ Error กรณี network มีปัญหา
    }
  };

  //Hook ดึงข้อมูลจาก API เมื่อ Component ถูกแสดงบนหน้าจอครั้งแรก
  useEffect(() => {
    fetchMembers();
  }, []); // [] = ให้รันฟังก์ชันแค่ครั้งเดียวหลังแสดงบนหน้าจอครั้งแรก

  //ฟังก์ชันส่งข้อมูลสมาชิกใหม่ไปยัง API
  const handleSave = async () => {
    // Validation ป้องกันการส่งข้อมูลว่างเปล่า
    if (!name || !lastName || !position) return;

    const newMember = { name, lastname: lastName, position };

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMember), // แปลง JS Object เป็น JSON String
      });

      //รีเซ็ตค่าในฟอร์มหลังจากส่งข้อมูลสำเร็จ
      setName("");
      setLastName("");
      setPosition("");

      // ดึงข้อมูลล่าสุดกลับมาอีกครั้ง เพื่ออัปเดตตารางให้แสดงผลข้อมูลใหม่ทันที
      fetchMembers();
    } catch (err) {
      console.error("Create error:", err);
    }
  };

  //ฟังก์ชันลบข้อมูลตาม ID ที่ระบุ
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchMembers(); // Re-fetch เพื่ออัปเดตตารางหลังลบเสร็จ
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // 3.ส่วนการแสดงผล
  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4 font-sans">
      {/*Header*/}
      <h1 className="text-center text-4xl font-extrabold leading-tight mb-8 text-slate-800">
        Generation Thailand
        <br />
        {sector === "user" && "Home - User Section"}
        {sector === "admin" && "Home - Admin Section"}
        {sector === "" && "React - Assessment"}
      </h1>

      {/*ปุ่มกดสลับมุมมองระหว่าง User และ Admin */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setSector("user")} //กดปุ่มแล้วจะสลับไปหน้า user
          className="px-6 py-4 bg-white text-slate-700 border border-stone-200 hover:bg-lime-100 rounded-lg font-bold shadow-md active:scale-95 transition"
        >
          User Home Section
        </button>
        <button
          onClick={() => setSector("admin")} // กดปุ่มแล้วจะสลับไปหน้า admin
          className="px-6 py-4 bg-white text-slate-700 border border-stone-200 hover:bg-lime-100 rounded-lg font-bold shadow-md active:scale-95 transition"
        >
          Admin Home Section
        </button>
      </div>

      {/*แสดง AdminForm เฉพาะเมื่อเลือกมุมมอง Admin*/}
      {sector === "admin" && (
        <AdminForm
          name={name}
          lastName={lastName}
          position={position}
          setName={setName}
          setLastName={setLastName}
          setPosition={setPosition}
          onSave={handleSave}
        />
      )}

      {/*แสดง UserTable เมื่อเลือกมุมมอง User หรือ Admin เท่านั้น */}
      {/* ส่งข้อมูล members, โหมด sector, และ Handler สำหรับลบข้อมูลไปเป็น Props */}
      {sector !== "" && (
        <UserTable members={members} sector={sector} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default Home;
