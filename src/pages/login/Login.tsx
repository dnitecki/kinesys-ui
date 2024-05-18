import LoginForm from "../../components/forms/loginForm/LoginForm";
import { ICONS } from "../../constants/constants";
import "./Login.scss";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <LoginForm />
        </div>
        <div className="login-plans">
          <img
            className="construction-image"
            alt="landingPage"
            src={ICONS.CONSTRUCTION}
          />
        </div>
      </div>
    </>
  );
}
