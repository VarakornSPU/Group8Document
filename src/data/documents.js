const documents = [
  {
    id: 1,
    name: "หนังสือรับรองการให้ความเห็นชอบเป็นผู้ตรวจสอบปีที่ตราเอียม.pdf",
    type: "หนังสือรับรอง",
    department: "กรมศิลปากรธรรมชาติ",
    date: "2024-05-20", // ใช้ ISO 8601 เพื่อให้จัดการวันที่ง่าย
    uploader: "สมชาย ใจดี", // ชื่อผู้ที่อัปโหลด
    fileUrl: "/documents/doc1.pdf", // ลิงก์ไปยังไฟล์จริง
    icon: "/img/pdf-icon.png", // ไอคอนแสดงประเภทไฟล์
  },
  {
    id: 2,
    name: "แผนปฏิบัติการปี 2024.pdf",
    type: "แผนงาน",
    department: "กรมการปกครอง",
    date: "2024-04-15",
    uploader: "วิทยา ก้องฟ้า",
    fileUrl: "/documents/doc2.pdf",
    icon: "/img/pdf-icon.png",
  },
  {
    id: 3,
    name: "รายงานประจำปี 2023.xlsx",
    type: "รายงาน",
    department: "การตลาด",
    date: "2023-12-30",
    uploader: "สมหญิง ขยันทำ",
    fileUrl: "/documents/doc3.xlsx",
    icon: "/img/pdf-icon.png", // ไอคอนเฉพาะสำหรับ Excel
  },
];

export default documents;
