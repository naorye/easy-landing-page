import * as React from "react";

const classes = require("./DrawerToggle.module.css");

interface DrawerToggleProps {
  clicked: () => void;
}

const drawerToggle = (props: DrawerToggleProps) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
