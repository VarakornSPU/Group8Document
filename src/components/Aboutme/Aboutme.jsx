import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const teamMembers = [
  {
    name: "นายปวิช ปัญญาศุภาพงศ์",
    imageClass: "john-image",
    description: "สวัสดีครับ! เราทีม และผมเป็นส่วนนึงในการพัฒนา Project Doc library", 
    details: "เรารับผิดชอบในการออกแบบ UI/UX สำหรับระบบโปรไฟล์และการลงชื่อเข้าใช้ (Sign In) รวมถึงการสัมภาษณ์ผู้ใช้เพื่อเก็บข้อมูลความต้องการ (User Requirements), About Me หน้านี้ด้วย และเขียนโค้ดที่ตอบโจทย์การใช้งานจริง",
    link: "https://www.instagram.com/px._.w11t/",
  },
  {
    name: "นายธัญพิสิษฐ์ บัวบุตร",
    imageClass: "jane-image",
    description: "สวัสดีครับ! เราชื่อโม และผมเป็นส่วนหนึ่งในการพัฒนา Project Doc Library",
    details: "เรารับผิดชอบในการออกแบบ UI สำหรับระบบรายงาน (Report) รวมถึงการวางแผนรายละเอียดและระยะเวลาในการทำงาน การสัมภาษณ์ผู้ใช้เพื่อเก็บข้อมูลความต้องการ (User Requirements) และเขียนโค้ดที่ตอบโจทย์การใช้งานจริง",
    link: "https://www.instagram.com/_mn.eo_mo/",
  },
  {
    name: "นายวรากร มาตุเรศ",
    imageClass: "mike-image",
    description: "สวัสดีครับ! เราชื่อวิค และผมเป็นส่วนหนึ่งในการพัฒนา Project Doc Library",
    details: "เรารับผิดชอบในการออกแบบ UI สำหรับหน้าหลัก (Home) และ Pop-Up รวมถึงการทำสไลด์นำเสนอ และเขียนโค้ดสำหรับหน้าหลัก (Home), เอกสารของฉัน (MyDocument), และหน้าช่วยเหลือ (Help)",
    link: "https://www.instagram.com/varakon.m",
  },
  {
    name: "นางสาวฐิตาภา บำรุงนา",
    imageClass: "alice-image",
    description: "สวัสดีค่ะ! เราชื่อกลอยใจ และเป็นส่วนหนึ่งในการพัฒนา Project Doc Library",
    details: "เรารับผิดชอบในการออกแบบ UI สำหรับระบบสิทธิ์การเข้าถึง (Permission) การเขียนโค้ดสำหรับระบบสิทธิ์การเข้าถึง (Permission) และการจัดทำเอกสาร SRS (Software Requirements Specification)",
    link: "https://www.instagram.com/kttp.x",
  },
  {
    name: "นายปวริศร เชื้อหมอ",
    imageClass: "nicky-image",
    description: "สวัสดีครับ! ผมชื่อโอม และเป็นส่วนหนึ่งในการพัฒนา Project Doc Library",
    details: "เรารับผิดชอบในการออกแบบ UI สำหรับระบบเอกสาร (Document) การทำสไลด์นำเสนอ และเขียนโค้ดสำหรับระบบเอกสาร (Document)",
    link: "https://www.instagram.com/23_sept.____",
  },
];

const AboutMe = () => {
  return (
    <motion.div
      className="about-me-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ fontSize: "1.2rem" }}
    >
      <h2 className="about-me-title">Meet Our Team</h2>
      <motion.hr
        className="dividermain"
        initial={{ width: 0 }}
        animate={{ width: "20%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className={`about-me-card ${member.imageClass}`}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="about-me-overlay">
              <h3 className="about-me-name">{member.name}</h3>
              <div className="about-me-info">
                <p className="about-me-description">{member.description}</p>
                <p className="about-me-details">{member.details}</p>
                <a
                  href={member.link}
                  className="about-me-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutMe;
