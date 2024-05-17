import TextField from "@mui/material/TextField/TextField";
import "./NewClientForm.scss";

export const NewClientForm = () => {
  return (
    <div className="new-client-form-container">
      <header className="modal-header">header</header>
      <form className="form-container">
        <TextField
          required
          fullWidth
          id="outlined-username-input"
          label="Username"
          name="username"
          autoComplete="username"
        />
        <TextField
          fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="password"
        />
      </form>
    </div>
  );
};
