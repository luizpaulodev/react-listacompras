import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CustomCard from "../../../common/CustomCard";

function NewItem(props) {
  return (
    <CustomCard
      action={() => props.startAdd(props.list)}
      link="#"
      containerClass="list-item"
    >
      <div className="new-item">
        <p className="title">Novo produto</p>
        <FontAwesomeIcon icon={faPlusCircle} color="#e4e4e4" size="8x" />
      </div>
    </CustomCard>
  );
}

export default NewItem;
