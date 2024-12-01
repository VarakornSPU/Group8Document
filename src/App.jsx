import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./Sidebar";
import Home from "./components/Home/Home";
import Administrator from "./components/Administrator/Administrator";
import Document from "./components/Document/Document";
import Permission from "./components/Permission/Permission";
import Reports from "./components/Reports/Reports";
import AddFileReport from "./components/Reports/addFileList/addFile";
import RemoveFileReport from "./components/Reports/removeFileList/removeFile";
import Help from "./components/Help/Help";
import Profile from "./components/Profile/Profile";
import Login from "./page/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import MyDocument from "./components/MyDocument/MyDocument";
import Popup from "./styles/Popup"; // Import Popup
import AboutMe from "./components/Aboutme/Aboutme";
import { PermissionProvider, usePermission } from "./contexts/PermissionContext"; // Import Context
import { verifyUser } from "./data/users";

import { FileProvider } from "./components/FileContext/FileContext";

import "./App.css";

// Route ที่ป้องกันไม่ให้ผู้ใช้เข้าถึงหน้าถ้าไม่มีสิทธิ์
function ProtectedRoute({ children, accessKey }) {
  const { userPermissions } = usePermission();

  if (!userPermissions[accessKey]) {
    return <Popup message="คุณไม่มีสิทธิ์เข้าถึงหน้านี้!" />;
  }

  return children;
}

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("guest");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username && password) {
      const user = verifyUser(username, password);
      if (user) {
        setRole(user.role);
        setUserData(user);
        localStorage.setItem("currentUser", JSON.stringify(user)); // บันทึกผู้ใช้ใน localStorage
      } else {
        console.error("Invalid credentials");
      }
    }
  }, [username, password]);

  const handleLogout = () => {
    setToken("");
    setRole("guest");
    setUserData(null);
    setUsername("");
    setPassword("");
    localStorage.removeItem("currentUser"); // ลบข้อมูลผู้ใช้จาก localStorage
  };

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setToken} setRole={setRole} setUsername={setUsername} setPassword={setPassword} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Login setToken={setToken} setRole={setRole} setUsername={setUsername} setPassword={setPassword} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  

  return (
    <PermissionProvider>
      <FileProvider>
        <BrowserRouter>
          <div className="d-flex">
            {role !== "guest" && <Sidebar user={userData} onLogout={handleLogout} />}
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Home role={role} />} />
                {role !== "guest" && (
                  <>
                    <Route
                      path="/administrator"
                      element={
                        <ProtectedRoute accessKey="permissionAccess">
                          <Administrator />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/my-document"
                      element={
                        <ProtectedRoute accessKey="documentAccess">
                          <MyDocument />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/document"
                      element={
                        <ProtectedRoute accessKey="documentAccess">
                          <Document />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/permission"
                      element={
                        <ProtectedRoute accessKey="permissionAccess">
                          <Permission />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/reports"
                      element={
                        <ProtectedRoute accessKey="reportsAccess">
                          <Reports />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/reports/addfilelist"
                      element={
                        <ProtectedRoute accessKey="reportsAccess">
                          <AddFileReport />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/reports/removefilelist"
                      element={
                        <ProtectedRoute accessKey="reportsAccess">
                          <RemoveFileReport />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/help" element={<Help />} />
                    <Route path="/profile" element={<Profile username={username} password={password} />} />
                    <Route path="/about-me" element={<AboutMe />} />
                  </>
                )}
                <Route path="/aboutme" element={<AboutMe role={role} />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </FileProvider>
    </PermissionProvider>
  );
}

export default App;
