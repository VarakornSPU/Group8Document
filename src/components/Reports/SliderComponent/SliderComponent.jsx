import React, { useState, useEffect } from 'react';
import './SliderComponent.css';


import Image1 from '../ReportsImage/LaptopBG.jpg';
import Image2 from '../ReportsImage/PostIt.jpg';
import Image3 from '../ReportsImage/SolarCell.jpg';

const slides = [

  {
    image: Image1,
    subtitle: 'สถิติ',
    title: 'ข้อมูลทั่วไป',
    description: 'ข้อมูลสถิติการดาวน์โหลดไฟล์',
    stats: [
      { value: '12,304', label: 'ยอดดาวน์โหลด', unit: 'ครั้ง' },
      { value: '1,589', label: 'ยอดเอกสารทั้งหมด', unit: 'ครั้ง' },
      { value: '104,204', label: 'ยอดเข้าชมเว็บไซต์', unit: 'ครั้ง' },
    ],
    date: '19/10/2567 เวลา 19:XX น.',
  },
  {
    image: Image2,
    subtitle: 'สถิติ',
    title: 'เอกสารแต่ละปี',
    description: 'ข้อมูลเอกสารแยกตามปี',
    stats: [
      { value: '359', label: 'เอกสารปี 2567', unit: 'ฉบับ' },
      { value: '250', label: 'เอกสารปี 2566', unit: 'ฉบับ' },
      { value: '159', label: 'เอกสารปี 2565', unit: 'ฉบับ' },
    ],
    date: '19/10/2567 เวลา 19:XX น.',
  },
  {
    image: Image3,
    subtitle: 'สถิติ',
    title: 'เอกสารในปีนี้',
    description: 'ข้อมูลเอกสารประจำเดือนและปี',
    stats: [
      { value: '12', label: 'เอกสารในสัปดาห์นี้', unit: 'ฉบับ' },
      { value: '359', label: 'ยอดเอกสารในปีนี้', unit: 'ฉบับ' },
      { value: '50', label: 'เอกสารในเดือนนี้', unit: 'ฉบับ' },
    ],
    date: '19/10/2567 เวลา 19:XX น.',
  },
];

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide ทุก 3 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, []);

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div
        className="slider-slide-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="slider-content">
              <h2 className='white'>{slide.subtitle}</h2>
              {/* <h1>{slide.title}</h1> */}

              <div className="slider-stats">
                {slide.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="slider-stat-item">
                    <h3>{stat.label}</h3>
                    <h1>{stat.value}</h1>
                    <h3>{stat.unit}</h3>
                  </div>
                ))}
              </div>
              <p>วันที่ {new Date().toLocaleDateString("th-TH", { day: 'numeric', month: 'long', year: 'numeric' })} เวลา {new Date().toLocaleTimeString("en-GB")} น.</p>

            </div>
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${currentSlide === index ? 'active' : ''
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;