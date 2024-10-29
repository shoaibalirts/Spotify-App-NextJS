"use client";

import { useEffect, useState } from "react";

// const [data, setData] = useState([]);
// useEffect(() => {
//   async function fetchGenre() {
//     const categoryList = await getPlayListAgainstCategory();
//   }
// }, []);
function fetchCategoryData(catId) {
  console.log(catId);
  console.log("clicked");
  // setData(data.push(catId));
}
export default function Category({ catId, catName, children }) {
  return <button onClick={() => fetchCategoryData(catId)}>{children}</button>;
}
