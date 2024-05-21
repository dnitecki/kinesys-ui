import TextField from "@mui/material/TextField/TextField";
import Select from "@mui/material/Select";
import "./NewClientForm.scss";
import MenuItem from "@mui/material/MenuItem";
import {
  CLIENT_STATUS,
  CUSTOMER_TYPE,
  STATE_LIST,
} from "../../../constants/content";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import { FormPropsType } from "../../../types/FormTypes";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import Radio from "@mui/material/Radio/Radio";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormLabel from "@mui/material/FormLabel/FormLabel";

export const NewClientForm: React.FC<FormPropsType> = ({ onClose }) => {
  return (
    <div className="new-client-form-container">
      <form className="form-container" onSubmit={onClose}>
        <div className="form-row">
          <h3>Client</h3>
        </div>
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
            <InputLabel>State</InputLabel>
            <Select
              className="custom-select"
              fullWidth
              label="State"
              name="state"
              IconComponent={ExpandMoreIcon}
            >
              {STATE_LIST.map((state) => (
                <MenuItem key={state.abbreviation} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Zip Code"
            name="zipCode"
            autoComplete="zip-code"
          />
        </div>
        <div className="form-row radio-row">
          <FormLabel id="demo-radio-buttons-group-label">
            Has your client provided pre-approval for the proposed plans and
            specifications?
          </FormLabel>
          <RadioGroup defaultValue="no" name="radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        <div className="form-row">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Client Status</InputLabel>
            <Select
              className="custom-select"
              fullWidth
              label="Client Status"
              name="clientStatus"
              IconComponent={ExpandMoreIcon}
            >
              {CLIENT_STATUS.map((status) => (
                <MenuItem key={status.id} value={status.status}>
                  {status.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form-row">
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Customer Type</InputLabel>
            <Select
              className="custom-select"
              fullWidth
              label="Customer Type"
              name="customerType"
              IconComponent={ExpandMoreIcon}
            >
              {CUSTOMER_TYPE.map((type) => (
                <MenuItem key={type.id} value={type.type}>
                  {type.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form-row">
          <h3>Sales Rep</h3>
        </div>
        <div className="form-row">
          <TextField
            fullWidth
            label="Sales Rep"
            name="salesRep"
            autoComplete="salesRep"
          />
        </div>
        <div className="form-row">
          <TextField
            fullWidth
            label="Label"
            name="label"
            autoComplete="label"
            multiline
            rows={4}
          />
        </div>
        <div className="form-row button-row">
          <button className="app-button">Save</button>
          <button className="submit-button" type="submit">
            Save & Submit
          </button>
        </div>
      </form>
    </div>
  );
};
