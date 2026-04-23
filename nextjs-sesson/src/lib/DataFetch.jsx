import React from "react";

const DataFetch = async (url,cache) => {
  try {
    const res = await fetch(url,cache);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default DataFetch;
