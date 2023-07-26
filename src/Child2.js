import React, { useContext, useEffect } from "react";
import dataContext from "./DataProvider";

export const Child2 = () => {
  const { setData } = useContext(dataContext);

  useEffect(() => {
    setData("i am fine");
  }, []);
  return <>i am two </>;
};
