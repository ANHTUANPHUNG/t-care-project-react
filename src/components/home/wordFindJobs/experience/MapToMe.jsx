import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

export function MapToMe({ mapToMe, setValueList, valueList }) {

  const handleChange = (e) => {
    if (valueList?.includes(e)) {
      setValueList((valueList) => valueList.filter((item) => item !== e));
    } else {
      setValueList((valueList) => [...valueList, e]);
    }
  };
  return (
    <>
      {mapToMe?.map((e) => (
        <div key={e?.id} style={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={valueList?.includes(e)}
                onChange={() => handleChange(e)}
              />
            }
            label={e.name}
          />
        </div>
      ))}
    </>
  );
}
