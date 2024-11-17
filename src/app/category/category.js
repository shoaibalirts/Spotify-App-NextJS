"use client";
import { getPlayListAgainstCategory } from "@/lib/spotifyapi";
import { useState } from "react";
import classes from "./category.module.css";
export default function Category({ catId, catName, children, index }) {
  const [list, setList] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  let categoryList;

  // handling different background color on each item
  const colors = [
    classes.color0,
    classes.color1,
    classes.color2,
    classes.color3,
    classes.color4,
    classes.color5,
    classes.color6,
    classes.color7,
  ];

  let count = 0;
  function newKey() {
    return count++;
  }
  // click function
  function fetchCategoryData(catId) {
    setIsOpen((prevState) => !prevState);
    // to fetch data from api
    async function fetchPlaylist() {
      // console.log(key);

      categoryList = await getPlayListAgainstCategory(catId);
      console.log(categoryList);
      // console.log(categoryList.message);
      // console.log(categoryList.playlists.items[0].id);
      // setList(categoryList.playlists.items[0].id);
      setList(
        categoryList.playlists.items.map((item) => {
          return (
            <li key={newKey()} className={classes.dropdownlist}>
              <p className={classes.playlistNames}>{item.name}</p>
              <p className={classes.greaterthan}>&gt;</p>
            </li>
          );
        })
      );
    }
    fetchPlaylist();
    console.log(list);
  }

  // onClick play list item as given below
  function fetchPlayListItem(playlistId) {
    async function playListItem() {
      const playlistItemData = await getPlayListItemAgainstPlaylistId(
        playlistId
      ); // Api
      console.log("");
    }
    playListItem();
  }
  // function listItem(list) {
  //  list.map((item)=>(
  //   <ul>
  //     <li className="list">
  //       <button onClick={()=>fetchPlayListItem(id)}>{item.props.children}</button>
  //     </li>
  //   </ul>
  //   <button></button>
  //  ));
  // }
  return (
    <>
      <button
        onClick={() => fetchCategoryData(catId)}
        className={`${classes.btnlist} ${colors[index % colors.length]}`}
      >
        {children}
        <p className={classes.dots}>. . .</p>
      </button>
      {isOpen && <ul>{list}</ul>}
    </>
  );
}
