import React from "react";

import NewList from "./NewList";
import List from "./List";

import "./Home.css";

function Home() {
  return (
    <div className="page-container">
      <NewList />
      <List />
    </div>
  );
}

export default Home;
