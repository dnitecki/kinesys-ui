import TextField from "@mui/material/TextField/TextField";
import "./NewClientForm.scss";

export const NewClientForm = () => {
  return (
    <div className="new-client-form-container">
      <form className="form-container">
        <div className="first-row">
          <TextField
            required
            fullWidth
            label="First Name"
            name="firstName"
            autoComplete="first-name"
          />
          <TextField
            fullWidth
            required
            label="Last Name"
            name="lastName"
            autoComplete="last-name"
          />
        </div>
        <div className="second-row">
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            fullWidth
            required
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phone-number"
            placeholder="(000) 000-0000"
            multiline
          />
        </div>
      </form>
    </div>
  );
};
