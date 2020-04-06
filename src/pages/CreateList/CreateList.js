import React from "react";

import "./CreateList.css";

import { TextField, MenuItem, InputAdornment } from "@material-ui/core";

const units = ["kg", "lt", "un"];

function CreateList() {
  return (
    <div className="page-container">
      <form className="form-container">
        <TextField
          label="Lista"
          name="list"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          label="Produto"
          name="product"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          label="Quantidade"
          name="quantity"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          style={{ width: "100px" }}
          select
          label="Unidade"
          name="unity"
          value={""}
          onChange={() => {}}
          required
        >
          {units.map((option) => (
            <MenuItem key={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Preço"
          name="price"
          value={""}
          onChange={() => {}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}

export default CreateList;
