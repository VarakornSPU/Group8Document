import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";

function Sidebar({ user, onLogout }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="sidebar-container d-flex flex-column justify-content-between vh-100">
      {/* Logo Section */}
      <div className="logo-section mb-4">
        <Link
          to="/"
          className="text-decoration-none d-flex align-items-center mb-3"
        >
          <img
            src="/Group8Document/img/Logo2.png"
            alt="Logo"
            className="logo-image styled-logo"
          />
        </Link>
      </div>

      {/* Menu Section */}
      <ul className="nav nav-pills flex-column mb-auto no-padding">
        {/* Home */}
        <li className="nav-item p-1">
          <Link
            to="/"
            className={`nav-link sidebar-item ${isActive("/") ? "active" : ""}`}
          >
            <i className="bi bi-house me-2"></i> Home
          </Link>
        </li>

         {/* About Me */}
        <li className="nav-item p-1">
          <Link
            to="/about-me"
            className={`nav-link sidebar-item ${
              isActive("/about-me") ? "active" : ""
            }`}
          >
            <i className="bi bi-person me-2"></i> About Me
          </Link>
        </li>

        {/* Administrator Dropdown */}
        <li className="nav-item p-1">
          <button
            className={`nav-link sidebar-item admin-dropdown`}
            onClick={toggleDropdown}
          >
            <i className="bi bi-gear me-2"></i> Administrator
          </button>
          {isDropdownOpen && (
            <ul className="nav flex-column ms-3 admin-submenu">
              <li className="nav-item p-1">
                <Link
                  to="/my-document"
                  className={`nav-link sidebar-item ${
                    isActive("/my-document") ? "active" : ""
                  }`}
                >
                  <i className="bi bi-file-earmark-text me-2"></i> My Document
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link
                  to="/document"
                  className={`nav-link sidebar-item ${
                    isActive("/document") ? "active" : ""
                  }`}
                >
                  <i className="bi bi-folder me-2"></i> Document Management
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link
                  to="/permission"
                  className={`nav-link sidebar-item ${
                    isActive("/permission") ? "active" : ""
                  }`}
                >
                  <i className="bi bi-shield-lock me-2"></i> Permission
                  Management
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link
                  to="/reports"
                  className={`nav-link sidebar-item ${
                    isActive("/reports") ? "active" : ""
                  }`}
                >
                  <i className="bi bi-bar-chart me-2"></i> Reports
                </Link>
              </li>
            </ul>
          )}
        </li>

       

        {/* Help */}
        <li className="nav-item p-1">
          <Link
            to="/help"
            className={`nav-link sidebar-item ${
              isActive("/help") ? "active" : ""
            }`}
          >
            <i className="bi bi-question-circle me-2"></i> Help
          </Link>
        </li>
      </ul>

      {/* Footer Section */}
      <div className="footer-section mt-auto">
        <hr className="divider" />
        <Link
          to="/profile"
          className="footer-link d-flex align-items-center justify-content-between text-decoration-none p-3"
        >
          <div className="user-info d-flex align-items-center">
            <span className="user-name">
              {user ? `${user.firstName} ${user.lastName}` : "User Name"}
            </span>
          </div>
          <img
            src={user?.avatar || "/img/default-avatar.png"}
            alt="Profile"
            className="footer-profile-image ms-2"
          />
        </Link>

        {/* Log out Button */}
        <button
          className="btn btn-danger sidebar-item mt-3 w-100"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right me-2"></i> Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
