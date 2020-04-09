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
      <Form addProduct={addProduct} updateProduct={props.updateProduct} />

      <div className="list-items-container">
        {props.list.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            toggleProduct={props.toggleProduct}
            deleteProduct={props.deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default CreateList;
