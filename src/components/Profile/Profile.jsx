import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { verifyUser } from "../../data/users";
import "./Profile.css";

function Profile({ username, password }) {
  const [userData, setUserData] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const user = verifyUser(username, password);
    if (user) {
      setUserData(user);
      setAvatar(user.avatar); // ตั้งค่า avatar จากข้อมูลผู้ใช้เริ่มต้น
    } else {
      console.error("User not found or password incorrect");
    }
  }, [username, password]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result); // อัปเดตรูปภาพที่แสดงผล
      reader.readAsDataURL(file);
    }
  };

  if (!userData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="loading-container"
      >
        <p>Loading...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="profile"
    >
      <motion.h1
        className="profile__header"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        โปรไฟล์
      </motion.h1>
      <motion.hr
        className="dividermain"
        initial={{ width: 0 }}
        animate={{ width: "20%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="profile__avatar-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ภาพโปรไฟล์ */}
        <label htmlFor="avatar-upload" className="profile__avatar-label">
          <img src={avatar} alt="Profile" className="profile__avatar" />
        </label>
        {/* อินพุตสำหรับอัปโหลด (ซ่อนอยู่) */}
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
      </motion.div>
      <motion.div
        className="profile__info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* ข้อมูลส่วนตัว */}
        <div className="profile__form-group--name">
          <motion.div
            className="profile__form-group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label>ชื่อจริง</label>
            <input type="text" value={userData.firstName} readOnly />
          </motion.div>
          <motion.div
            className="profile__form-group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label>นามสกุล</label>
            <input type="text" value={userData.lastName} readOnly />
          </motion.div>
        </div>
        <motion.div
          className="profile__form-group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <label>E-mail</label>
          <input type="text" value={userData.email} readOnly />
        </motion.div>
        {/* ข้อมูลแผนกและตำแหน่ง */}
        <div className="profile__form-group--name">
          <motion.div
            className="profile__form-group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label>แผนก</label>
            <input type="text" value={userData.department} readOnly />
          </motion.div>
          <motion.div
            className="profile__form-group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label>ตำแหน่ง</label>
            <input type="text" value={userData.position} readOnly />
          </motion.div>
        </div>
        {/* ข้อมูลรหัสพนักงาน */}
        <motion.div
          className="profile__form-group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <label>รหัสพนักงาน</label>
          <input type="text" value={userData.employeeId} readOnly />
        </motion.div>
        {/* ข้อมูลบทบาท */}
        <motion.div
          className="profile__form-group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
