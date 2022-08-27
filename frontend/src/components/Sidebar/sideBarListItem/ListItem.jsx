import React from "react";
import { List } from "../Sidebar.styled";

const ListItem = ({ text, svg }) => {
  return (
    <div>
      <List>
        <img style={{ paddingRight: 16 }} src={svg} alt="list-icon" />

        <span>{text}</span>
      </List>
    </div>
  );
};

export default ListItem;
