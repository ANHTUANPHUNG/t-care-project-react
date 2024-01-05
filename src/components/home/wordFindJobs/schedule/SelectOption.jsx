import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectOption({ startIndex, endIndex, nameSelect , onchange}) {
  const [value, setValue] = React.useState(startIndex);

  const handleChange = (event) => {
    setValue(event.target.value)
    onchange(event.target.value);
  };
  return (
    <Select
      label={nameSelect}
      value={value}
      onChange={handleChange}
    >
      {Array.from({ length: endIndex - startIndex + 1 }, (_, index) => (
        <MenuItem key={index} value={startIndex + index}>
          {startIndex + index}
        </MenuItem>
      ))}
    </Select>
  );
}

export default SelectOption;