import React from "react";

const ColorfulMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentAtyle = {
    // color: color,
    color,
    fontSize: "18px",
    fontWeight: "bold"
  };
  return <p style={contentAtyle}>{children}</p>;
};

export default ColorfulMessage;
