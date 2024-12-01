import React, { useState } from 'react';
import { FaHome, FaFileAlt, FaUpload, FaKey, FaChartBar, FaUserCircle } from 'react-icons/fa';
import './Help.css';

function Help() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const helpSections = [
    {
      id: 'home',
      icon: <FaHome className="help-icon" />,
      title: 'หน้าแรก (Home)',
      content:
       'หน้าแรกจะเป็นหน้าหลักของระบบที่แสดงเอกสารทั้งหมดที่อัปโหลดไว้ คุณสามารถค้นหา เรียงลำดับ หรือกรองเอกสารต่างๆ ตามประเภทหรือวันที่ได้จากที่นี่\n\n' +
        'คุณสามารถดาวน์โหลดเอกสาร ดูตัวอย่าง และเลือกเอกสารหลายๆ รายการพร้อมกันได้ รวมถึงการดูข้อมูลเชิงสถิติ เช่น ยอดดาวน์โหลดและจำนวนเอกสารในปีต่างๆ',
    },
    {
      id: 'my-documents',
      icon: <FaFileAlt className="help-icon" />,
      title: 'เอกสารของฉัน (My Documents)',
      content: 'ในหน้า My Documents คุณสามารถทำรายการต่างๆ ที่เกี่ยวข้องกับเอกสารของคุณได้ตามขั้นตอนดังนี้:\n\n' +
        '1. ค้นหาเอกสาร - คุณสามารถค้นหาเอกสารของคุณโดยการใช้ช่องค้นหาที่มีอยู่ในหน้า My Documents โดยกรอกชื่อเอกสารหรือประเภทของเอกสารที่คุณต้องการค้นหา ระบบจะแสดงผลลัพธ์ที่ตรงกับคำค้นหาของคุณ.\n' +
        '2. ดาวน์โหลดเอกสาร - คลิกที่ปุ่ม ดาวน์โหลด ข้างๆ เอกสารที่คุณต้องการดาวน์โหลด เพื่อบันทึกเอกสารลงในอุปกรณ์ของคุณในรูปแบบที่รองรับ.\n' +
        '3. ลบเอกสาร - หากคุณต้องการลบเอกสารของตัวเอง, คลิกที่ปุ่ม ลบ ข้างๆ เอกสารนั้น ระบบจะขอให้คุณยืนยันการลบเอกสาร, หลังจากนั้นเอกสารจะถูกลบออกจากระบบอย่างถาวร.\n' +
        '4. แก้ไขเอกสาร - หากคุณต้องการแก้ไขรายละเอียดของเอกสาร, คลิกที่ปุ่ม แก้ไข ข้างๆ เอกสารนั้น เพื่อเปิดหน้าต่างแก้ไขเอกสาร. คุณสามารถเปลี่ยนแปลงข้อมูลต่างๆ เช่น ชื่อเอกสาร ประเภทเอกสาร วันที่ และหน่วยงานที่เกี่ยวข้อง แล้วคลิก บันทึก เพื่อบันทึกการเปลี่ยนแปลง.',
    },
    {
      id: 'upload',
      icon: <FaUpload className="help-icon" />,
      title: 'การอัปโหลดไฟล์ (Upload)',
      content:
        'ในหน้าการอัปโหลดไฟล์ ผู้ใช้สามารถอัปโหลดเอกสารได้ โดยกรอกข้อมูลต่างๆ เช่น ชื่อไฟล์, ประเภท, หน่วยงาน วันที่และปีการอัปโหลด.\n\n' +
        'เมื่ออัปโหลดไฟล์สำเร็จแล้ว ระบบจะเพิ่มข้อมูลในฐานข้อมูลและสามารถดูข้อมูลของไฟล์ในหน้ารายงานได้.',
    },
    {
      id: 'permissions',
      icon: <FaKey className="help-icon" />,
      title: 'การตั้งค่าสิทธิ์ผู้ใช้ (Permissions)',
      content:
        'ในหน้าการตั้งค่าสิทธิ์ผู้ใช้ (Permissions) คุณสามารถจัดการสิทธิ์การเข้าถึงฟังก์ชันต่างๆ ของระบบสำหรับผู้ใช้ในแต่ละบทบาท (Roles) ได้อย่างง่ายดาย.\n\n' +
        'คุณสามารถทำสิ่งต่อไปนี้ได้ในหน้านี้:\n' +
        '1. ดูบทบาทของผู้ใช้ที่มีอยู่ในระบบ (เช่น ผู้ดูแลระบบ, ผู้ใช้งานทั่วไป, ผู้เข้าถึงเฉพาะบางฟังก์ชัน เป็นต้น).\n' +
        '2. เพิ่มหรือแก้ไขบทบาทการเข้าถึงของผู้ใช้แต่ละคน เช่น การอนุญาตให้ผู้ใช้เข้าถึงหรือทำงานกับฟังก์ชันเฉพาะภายในแอปพลิเคชัน.\n' +
        '3. ปรับเปลี่ยนการตั้งค่าการอนุญาตของผู้ใช้ เช่น การให้สิทธิ์ในการดูและจัดการเอกสาร, การอัปโหลดไฟล์, การเข้าถึงรายงาน หรือการตั้งค่าผู้ใช้.\n\n' +
        'หากคุณเป็นผู้ดูแลระบบ (Admin), คุณจะสามารถจัดการสิทธิ์ของผู้ใช้ทั้งหมดในระบบได้ และสามารถกำหนดได้ว่าแต่ละผู้ใช้สามารถเข้าถึงฟังก์ชันใดได้บ้าง.',
    },
    {
      id: 'reports',
      icon: <FaChartBar className="help-icon" />,
      title: 'รายงาน (Reports)',
      content:
      'ในหน้ารายงาน ระบบจะแสดงข้อมูลสถิติต่างๆ เช่น จำนวนเอกสารที่อัปโหลดและข้อมูลการดาวน์โหลด, จำนวนเอกสารที่อัปโหลด, ยอดดาวน์โหลดเอกสาร, เอกสารในปีนี้ และเอกสารที่อัปโหลดในสัปดาห์นี้ รวมถึงวันที่อัปโหลดล่าสุด.\n\n' +
      'คุณสามารถเลือกดูรายงานของเอกสารในแต่ละปีหรือดูข้อมูลจากหน่วยงานต่างๆ ได้ รวมถึงการดูไฟล์ที่อัปโหลดล่าสุด.',
    },
    {
      id: 'user-profile',
      icon: <FaUserCircle className="help-icon" />,
      title: 'การตั้งค่าผู้ใช้ (User Profile)',
      content:
       'ในหน้านี้ผู้ใช้สามารถดูข้อมูลส่วนตัว เช่น ชื่อ, อีเมล์, ตำแหน่ง และรูปโปรไฟล์.\n\n' +
        'ผู้ใช้ยังสามารถออกจากระบบได้จากหน้านี้โดยการคลิกที่ปุ่ม "ออกจากระบบ".',
    },
  ];

  return (
    <div className={isDarkMode ? 'help-container dark-mode' : 'help-container'}>
      <header className="help-header">
        <h1 className="help-title">คำแนะนำการใช้งานระบบ</h1>
        
      </header>

      <div className="help-navigation">
        <input
          type="text"
          className="help-search"
          placeholder="ค้นหาหัวข้อ..."
          onChange={handleSearch}
        />
       
      </div>

      <main className="help-content">
        {helpSections.filter((section) =>
          section.title.toLowerCase().includes(searchQuery) ||
          section.content.toLowerCase().includes(searchQuery)
        ).length === 0 ? (
          <p>ไม่พบผลลัพธ์ที่เกี่ยวข้องกับคำค้นหาของคุณ</p>
        ) : (
          helpSections.filter((section) =>
            section.title.toLowerCase().includes(searchQuery) ||
            section.content.toLowerCase().includes(searchQuery)
          ).map((section) => (
            <section key={section.id} id={section.id} className="help-card">
              <h2 className="help-subtitle" onClick={() => toggleSection(section.id)}>
                {section.icon} {section.title}
              </h2>
              {expandedSection === section.id && <p>{section.content}</p>}
            </section>
          ))
        )}
      </main>
    </div>
  );
}

export default Help;
