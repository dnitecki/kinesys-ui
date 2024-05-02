import LoginForm from "../../components/loginForm/LoginForm";
import "./Login.scss";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <LoginForm />
        </div>
        <div className="login-plans"></div>
      </div>
    </>
  );
}
