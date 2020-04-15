import React from "react";

import NewList from "./NewList";
import List from "./List";

import "./Home.css";

function Home(props) {
  return (
    <div className="page-container">
      <NewList newList={props.newList} />

      {props.list.items.length > 0 && (
        <List
          list={props.list.list}
          total={props.total}
          openedItems={props.openedItems}
          closedItems={props.closedItems}
        />
      )}
    </div>
  );
}

export default Home;
