import React from "react";
import "./FileSummary.css";
function FileSummary() {
  return (
    <aside className="file-summary">
      <p className="title-filesummary">ประเภทไฟล์</p>
      <ul>
        <li>PDF: 1032 ฉบับ</li>
        <li>PNG: 192 ฉบับ</li>
        <li>JPG: 121 ฉบับ</li>
        <li>และอื่นๆ: 10 ฉบับ</li>
      </ul>
      <p className="title-filesummary">อัพโหลดไฟล์ (30 วันที่ผ่านมา)</p>
      <ul>
        <li>สมจิตร คิดเรื่องแสง: 10 ฉบับ</li>
        <li>สมจิตร คิดเรื่องแสง: 8 ฉบับ</li>
        <li>สมจิตร คิดเรื่องแสง: 4 ฉบับ</li>
      </ul>
    </aside>
  );
}

export default FileSummary;
