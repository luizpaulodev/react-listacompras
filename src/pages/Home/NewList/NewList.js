import React from "react";
import CustomCard from "../../../common/CustomCard";

import "./NewList.css";

function NewList(props) {
  return (
    <CustomCard
      action={props.newList}
      link="/lista/novo"
      containerClass="new-list-container"
    >
      <div>
        <p className="title">Adicionar Novas Listas!</p>
      </div>
    </CustomCard>
  );
}

export default NewList;
