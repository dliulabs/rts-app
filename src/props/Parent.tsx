import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked.")}>
      some text here
    </ChildAsFC>
  );
};

export default Parent;
