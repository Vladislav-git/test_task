import React from "react";

import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import { InputProps } from "../types/types";

const Input: React.FC<InputProps> = ({ setSearch }) => {
  return (
    <InputBase
      onChange={(e) => setSearch(e.target.value)}
      style={styles.inputBase}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon sx={{ color: "#432EAB" }} />
        </InputAdornment>
      }
    />
  );
};

const styles = {
  inputBase: {
    width: "90%",
    height: 50,
    padding: 10,
    marginTop: 70,
    border: "1px solid",
    borderRadius: "24px",
    borderColor: "#D4DEFE",
  },
};

export default Input;
