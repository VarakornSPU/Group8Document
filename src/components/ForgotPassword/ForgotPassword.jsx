import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import logo from "../ForgotPassword/Logo.png"; // Import your logo image

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");  // New state to track message type
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType("");  // Reset message type on new submission

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("กรุณากรอกอีเมลที่ถูกต้อง.");
      setMessageType("error");  // Set message type to error
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate sending reset link
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("ลิงก์รีเซ็ตรหัสผ่านถูกส่งไปยังอีเมลของคุณแล้ว.");
      setMessageType("success");  // Set message type to success
    } catch (error) {
      setMessage("เกิดข้อผิดพลาด กรุณาลองอีกครั้ง.");
      setMessageType("error");  // Set message type to error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <img src={logo} alt="Logo" className="forgot-password-logo" /> {/* Logo Image */}
          <h2 className="forgot-password-title">ลืมรหัสผ่าน?</h2>
          <p className="forgot-password-text">กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน</p>
          <form onSubmit={handleSubmit}>
            <label className="forgot-password-label">อีเมล*</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="กรอกอีเมลของคุณ"
              required
              className="forgot-password-input"
            />
            <button
              type="submit"
              disabled={isSubmitting}   
              className="forgot-password-button"
            >
              {isSubmitting ? "กำลังส่ง..." : "ส่งลิงก์รีเซ็ตรหัสผ่าน"}
            </button>
          </form>
          {message && (
            <p className={`forgot-password-message ${messageType === "error" ? "error-message" : "success-message"}`}>
              {message}
            </p>
          )}

          <button onClick={handleBackToLogin} className="forgot-password-back-button">
            กลับสู่หน้าเข้าสู่ระบบ
          </button>
        </div>
        <div className="forgot-password-bg"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
