var fs = require("fs");
import savedData from "./data.json";
type dataProps = {
  personList: {
    persons: { id: number; name: string; email: string; balance: number }[];
  };
};

export const loadData = (): dataProps => {
  var data: dataProps;

  if (localStorage.getItem("data") == null) {
    data = savedData;
    console.log("using JSON data");
  } else {
    let dataString = localStorage.getItem("data");
    data = JSON.parse(dataString as string);
    console.log("using Cookie data");
  }

  return data;
};

export const saveData = (data: dataProps) => {
  localStorage.setItem("data", JSON.stringify(data));

  //   Async OP: timer of 1500ms should be enough, BUT
  //TODO: Use Promises / or something else
//You need to get it from a node server (running on another localhost port)
};
