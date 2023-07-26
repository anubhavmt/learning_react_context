import React, { useContext } from "react";
import dataContext from "./DataProvider";

export const Child1 = () => {
  const { data } = useContext(dataContext);
  return <>i am one {data} </>;
};
