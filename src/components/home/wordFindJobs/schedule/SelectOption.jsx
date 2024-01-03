import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect({startIndex ,endIndex, nameSelect}) {

  const [num, setNum] = useState();

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
      <FormControl fullWidth  sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{nameSelect}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={num}
          label="demo-simple-select-label"
          onChange={handleChange}
        >
          {Array.from({ length: endIndex-startIndex +1 }, (_, index) => (
            <MenuItem key={startIndex + index} value={startIndex + index}>
              {startIndex + index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
