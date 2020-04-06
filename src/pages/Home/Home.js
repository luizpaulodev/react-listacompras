import React from "react";

import "./Home.css";
import NewList from "./NewList";
import List from "./List";

function Home() {
  return (
    <div className="page-container">
      <NewList />
      <List />
    </div>
  );
}

export default Home;
