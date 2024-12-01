import React from "react";
import { useLocation } from 'react-router-dom';
import SliderComponent from "./SliderComponent/SliderComponent"
import FileSummary from "./FileSummary/FileSummary";
import LatestFiles from "./LatestFiles/LatestFiles";
import './Reports.css';
import TableSection from "./TableSection/TableSection";
import { motion } from 'framer-motion'

const Reports = () => {
  const location = useLocation();
  return (
    <>
      <motion.div 
      animate={{ opacity: 1 }} 
      initial={{ opacity: 0 }} 
      className="aWholeContent">
        <SliderComponent />
        <div className="content">
          <div className="flex1">
            <div className="Document-section">
              <TableSection />
            </div>
            <div className="Document-type">
              <FileSummary />
            </div>
          </div>
          <div className="flex2">
            <div className="Document-Upload">
              <LatestFiles title="ไฟล์ที่เพิ่มล่าสุด" />
            </div>
            <div className="Document-Delete">
              <LatestFiles title="ไฟล์ที่ลบล่าสุด" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Reports;