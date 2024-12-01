import React, { createContext, useContext, useState, useEffect } from 'react';

// สร้าง Context สำหรับจัดการสิทธิ์
const PermissionContext = createContext();

// ฟังก์ชันสำหรับใช้ Context
export const usePermission = () => useContext(PermissionContext);

export const PermissionProvider = ({ children }) => {
  const [userPermissions, setUserPermissions] = useState({});

  useEffect(() => {
    // ฟังก์ชันที่จะดึงข้อมูลผู้ใช้ที่ล็อกอิน
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setUserPermissions({
        documentAccess: user.documentAccess,
        permissionAccess: user.permissionAccess,
        reportsAccess: user.reportsAccess,
      });
    }
  }, []);

  return (
    <PermissionContext.Provider value={{ userPermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};
