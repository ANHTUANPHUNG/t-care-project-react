import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

export function MapToMe({ mapToMe, setValueList, checkService, valueList }) {
  const handleChange = (e) => {
    if (valueList?.includes(e)) {
      setValueList((valueList) => valueList.filter((item) => item !== e));
    } else {
      setValueList((valueList) => [...valueList, e]);
    }
  };
  function formatCurrency(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: 'currency',
      currency: "VND",
    }).format(parseFloat(price));
  }
  return (
    <>
      {mapToMe?.map((e) => (
        <>
          <div key={e?.id} style={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox checked={valueList?.includes(e)} onChange={() => handleChange(e)} />
              }
              label={e.name}
            />
          </div>
          {checkService
            ? e.description.split(".").map(
                (sentence, index) =>
                  sentence.length > 0 && (
                    <div key={index} className="mx-3">
                      + {sentence.trim()}
                      <br />
                    </div>
                  )
              )
            : ""}
          {checkService ? (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              Giá tiền :{" "}
              {formatCurrency(e?.priceEmployee)}
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
}
