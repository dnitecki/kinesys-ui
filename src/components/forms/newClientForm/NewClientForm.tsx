import TextField from "@mui/material/TextField/TextField";
import Select from "@mui/material/Select";
import "./NewClientForm.scss";
import MenuItem from "@mui/material/MenuItem";
import { STATES } from "../../../constants/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";

export const NewClientForm = () => {
  return (
    <div className="new-client-form-container">
      <form className="form-container">
        <div className="form-row">
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
        <div className="form-row">
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
        <div className="form-row">
          <TextField
            fullWidth
            required
            label="Address"
            name="address"
            autoComplete="address"
          />
        </div>
        <div className="form-row">
          <FormControl variant="outlined" fullWidth required>
            <InputLabel className="custom-label">State</InputLabel>
            <Select
              className="custom-select"
              fullWidth
              label="State"
              name="state"
              IconComponent={ExpandMoreIcon}
            >
              {STATES.stateList.map((state) => (
                <MenuItem key={state.abbreviation} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </form>
    </div>
  );
};
