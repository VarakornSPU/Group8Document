import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { verifyUser } from "../../data/users";

function Login({ setToken, setRole, setUsername, setPassword }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Reset input fields
    usernameRef.current.value = "";
    passwordRef.current.value = "";

    // Verify user
    const userInfo = verifyUser(username, password);
    if (!userInfo) {
      setErrorMessage("ชื่อผู้ใช้หรือรหัสผ่านผิด");
      setInputError(true); // Highlight error
      usernameRef.current.focus(); // Focus on username
    } else {
      // Reset errors
      setErrorMessage("");
      setInputError(false);

      // Save user information in state
      setToken(userInfo.token);
      setRole(userInfo.role);
      setUsername(username);
      setPassword(password);

      // Save user information to localStorage
      localStorage.setItem("token", userInfo.token);
      localStorage.setItem("role", userInfo.role);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem('userData', JSON.stringify(userInfo)); // Store the actual user data

      // Redirect to the main page
      navigate("/");
    }
  };

  const handleGuestLogin = () => {
    const guestToken = "guest_token";
    const guestRole = "guest";
    const guestUsername = "guest";
    const guestPassword = "";

    // Save guest information in state
    setToken(guestToken);
    setRole(guestRole);
    setUsername(guestUsername);
    setPassword(guestPassword);

    // Save guest information to localStorage
    localStorage.setItem("token", guestToken);
    localStorage.setItem("role", guestRole);
    localStorage.setItem("username", guestUsername);
    localStorage.setItem("password", guestPassword);

    // Store guest data in localStorage
    localStorage.setItem("userData", JSON.stringify({
      firstName: "Guest",
      lastName: "User",
      role: guestRole,
      token: guestToken,
      username: guestUsername,
    }));

    // Redirect to the main page
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-form__title">ยินดีต้อนรับ</h2>
          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <label
              className={`login-form__label ${inputError ? "error-label" : ""}`}
            >
              ชื่อผู้ใช้*
            </label>
            <input
              type="text"
              placeholder="กรอกชื่อผู้ใช้"
              ref={usernameRef}
              required
              className={`login-form__input ${inputError ? "input-error" : ""}`}
            />

            {/* Password Field */}
            <label
              className={`login-form__label ${inputError ? "error-label" : ""}`}
            >
              รหัสผ่าน*
            </label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="กรอกรหัสผ่าน"
                ref={passwordRef}
                required
                className={`login-form__input password-input ${inputError ? "input-error" : ""}`}
                style={{
                  marginBottom: "0px"
                }}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                ></i>
              </button>
            </div>

            {/* Error Message */}
            {inputError && (
              <div className="error-message-password">
                <i className="bi bi-exclamation-circle-fill"></i>{" "}
                {errorMessage}
              </div>
            )}

            <button type="submit" className="login-button">
              เข้าสู่ระบบ
            </button>
          </form>

          {/* Forgot Password Link */}
          <Link to="/forgot-password" className="forgot-password">
            ลืมรหัสผ่าน ?
          </Link>

          <div className="or">หรือ</div>

          {/* Guest Login Button */}
          <button onClick={handleGuestLogin} className="guest-login">
            เข้าสู่ระบบโดยไม่ต้องลงชื่อเข้าใช้
          </button>
        </div>
        <div className="login-bg"></div>
      </div>
    </div>
  );
}

export default Login;
