import React from 'react';
import { Link } from "react-router-dom";
import './LatestFiles.css';

function LatestFiles({ title }) {

  const LinktoThis = title === "ไฟล์ที่เพิ่มล่าสุด" ? "/reports/addfilelist" : "/reports/removefilelist"
  return (
    <section className="latest-files">
      <h3 className='latest-files-title'>{title}</h3>
      <table className='width100'>
        <thead>
          <tr>
            <th>หน่วยงาน</th>
            <th>จำนวนเอกสาร</th>
            <th>อัพโหลดล่าสุด</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(3)].map((_, index) => (
            <tr className='border-bottom-document-report' id='list-report-latestfiles' key={index}>
              <td>บันทึกเรื่องลึกลับ 1...</td>
              <td>สมจิตร คิดเรื่องแสง</td>
              <td>21:29 น. 19/ต.ค./2567</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={LinktoThis}>
        <button className='button-see-more'>ดูเพิ่มเติม</button>
      </Link>
    </section>
  );
}

export default LatestFiles;
