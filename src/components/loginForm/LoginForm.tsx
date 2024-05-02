import TextField from "@mui/material/TextField/TextField";
import "./LoginForm.scss";
import KinesysIcon from "../../icons/KinesysIcon.svg";

const LoginForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <div className="login-icon-container">
            <img className="login-icon" src={KinesysIcon} alt="Kinesys Icon" />
          </div>
          <h4>Welcome to</h4>
          <h1>KINESYS</h1>
        </div>
        <h2>Sign In</h2>
        <TextField fullWidth id="outlined-username-input" label="Username" />
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <div className="form-footer">
          <div className="form-checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="forgot-password-link">
            <a>Forgot Password</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
