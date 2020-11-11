import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

export default function ToDo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary="to do" secondary={props.data} />
      </ListItem>
    </List>
  );
}
