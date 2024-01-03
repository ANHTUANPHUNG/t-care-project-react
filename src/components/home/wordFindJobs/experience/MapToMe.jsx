import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export function MapToMe({ mapToMe }) {
  return (
    <>
      {mapToMe.map((e) => (
        <div key={e.id} style={{ display: "flex" }}>
          <FormControlLabel control={<Checkbox />} label={e.name} />
        </div>
      ))}
    </>
  );
}
