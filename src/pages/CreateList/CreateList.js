import React from "react";

import Form from "./Form";
import ListItem from "./ListItem";

import "./CreateList.css";
import NewItem from "./NewItem";

function CreateList(props) {
  const addProduct = (product, list) => {
    props.addProduct(product, list);
  };

  return (
    <div className="page-container">
      <Form
        url={props.match.params.action}
        addProduct={addProduct}
        updateProduct={props.updateProduct}
      />

      <div className="list-items-container">
        {props.list.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            list={props.list.list}
            toggleProduct={props.toggleProduct}
            deleteProduct={props.deleteProduct}
          />
        ))}

        {props.match.params.action === "edicao" && (
          <NewItem list={props.list.list} />
        )}
      </div>
    </div>
  );
}

export default CreateList;
