import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const services = [
  { id: 1, name: "Personal care (bathing and dressing)" },
  { id: 2, name: "Meal preparation" },
  { id: 3, name: "Light housekeeping" },
  { id: 4, name: "Dementia care" },
  { id: 5, name: "Errands/shopping" },
  { id: 6, name: "Transportation" },
  { id: 7, name: "Respite care" },
  { id: 8, name: "Home care" },
  { id: 9, name: "Medication management" },
  { id: 10, name: "Live-in home care" },
];

export default function MultipleSelectPlaceholder() {
  const [personName, setPersonName] = useState("");

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          sx={{backgroundColor:"#f3f4f6"}}
        >
          <MenuItem  disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {services.map((service) => (
            <MenuItem  key={service.id} value={service.name}>
              {service.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
