"use client";
import { getPlayListAgainstCategory } from "@/lib/spotifyapi";
import { useState } from "react";

export default function Category({ catId, catName, children }) {
  const [list, setList] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  let categoryList;

  let count = 0;
  function newKey() {
    return count++;
  }
  // click function
  function fetchCategoryData(catId) {
    setIsOpen((prevState) => !prevState);
    // to fetch data from api
    async function fetchGenres() {
      // console.log(key);

      categoryList = await getPlayListAgainstCategory(catId);
      console.log(categoryList);
      console.log(categoryList.message);
      console.log(categoryList.playlists.items[0].id);
      setList(categoryList.playlists.items[0].id);
      setList(
        categoryList.playlists.items.map((item) => {
          return <p key={newKey()}>{item.name}</p>;
        })
      );
    }
    fetchGenres();
  }
  return (
    <>
      <button onClick={() => fetchCategoryData(catId)}>{children}</button>
      {isOpen && <ul className="list">{list}</ul>}
    </>
  );
}
