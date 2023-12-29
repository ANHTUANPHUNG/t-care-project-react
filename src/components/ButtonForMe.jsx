import { Button } from "@mui/material";
import React from "react";

export function ButtonForMe({value, childrenButton}) {
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      style={{
        width: value !== "" && value !== undefined && value !== null ? `${value}%` : "30%",
        backgroundColor: "orangered",
        height: "100%",
        border: "1px solid orangered",
        borderRadius: "20px",
      }}
    >{childrenButton}</Button>
  );
}
