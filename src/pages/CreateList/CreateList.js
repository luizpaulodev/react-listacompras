import React from "react";

import Form from "./Form";
import ListItem from "./ListItem";

import "./CreateList.css";

function CreateList(props) {
  const addProduct = (product, list) => {
    props.addProduct(product, list);
  };

  return (
    <div className="page-container">
      <Form addProduct={addProduct} />

      <div className="list-items-container">
        <ListItem />
      </div>
    </div>
  );
}

export default CreateList;
