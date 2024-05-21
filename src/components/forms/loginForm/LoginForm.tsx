import TextField from "@mui/material/TextField/TextField";
import "./LoginForm.scss";
import { useRef, useState } from "react";
import { EMPTY_STRING, ICONS } from "../../../constants/content";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const formInitialState = {
    username: EMPTY_STRING,
    password: EMPTY_STRING,
    rememberMe: false,
  };
  const navigate = useNavigate();
  const form = useRef();
  const [formData, setFormData] = useState(formInitialState);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <form ref={form} onSubmit={handleLogin} className="login-form-container">
        <div className="form-header">
          <div className="login-icon-container">
            <img
              className="login-icon"
              src={ICONS.KINESYS_ICON}
              alt="Kinesys Icon"
            />
          </div>
          <h4>Welcome to</h4>
          <h1>KINESYS</h1>
        </div>
        <h2>Sign In</h2>
        <TextField
          required
          fullWidth
          id="outlined-username-input"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <TextField
          fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          autoComplete="password"
        />
        <div className="form-links">
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="forgot-password-link">
            <a>Forgot Password</a>
          </div>
        </div>
        <div className="form-button">
          <button className="sign-in-button" id="submit-button" type="submit">
            <p>SIGN IN</p>
          </button>
        </div>
        <hr />
        <div className="form-footer">
          <p>Don't have an account?</p>
          <a>Sign up</a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
