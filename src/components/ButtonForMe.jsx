import { Button } from "@mui/material";
import React from "react";

export function ButtonForMe({value, childrenButton, colorButton}) {
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      style={{
        width: value !== "" && value !== undefined && value !== null ? `${value}%` : "30%",
        backgroundColor: colorButton || "orangered",
        height: "100%",
        borderRadius: "20px",
      }}
    >{childrenButton}</Button>
  );
}
