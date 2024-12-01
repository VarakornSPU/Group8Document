import React from "react";
import { usePermission } from "../contexts/PermissionContext";
import Popup from "./Popup";

const RestrictedPage = () => {
  const { userPermissions } = usePermission();

  // ตรวจสอบสิทธิ์
  if (!userPermissions.documentAccess) {
    return <Popup message="คุณไม่มีสิทธิ์เข้าถึงหน้านี้!" />;
  }

  return (
    <div>
      <h1>หน้านี้เป็นหน้าที่ต้องการสิทธิ์ Document Access</h1>
    </div>
  );
};

export default RestrictedPage;
