import LoginForm from "../../components/forms/loginForm/LoginForm";
import { DOCUMENT_TITLE, ICONS } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";
import "./Login.scss";

export default function Login() {
  useTitle(DOCUMENT_TITLE.SIGN_IN);

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
