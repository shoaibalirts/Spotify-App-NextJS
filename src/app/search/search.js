"use client";
import Header from "@/components/header";
import { useState } from "react";
import { getSearchForItem } from "@/lib/spotifyapi";
export default function Search() {
  const [results, setResults] = useState();
  function getSelectedValue(e) {
    console.log(e.target.value);
  }
  let searchResults;

  async function submitHandler(event) {
    event.preventDefault();
    const filter = event.target.filter.value;
    const query = event.target.enteredText.value;
    let filteredCollection = event.target.filter.selectedOptions;
    // console.log(filteredCollection[0].value);
    // console.log(filteredCollection[1].value);
    console.log(filteredCollection);

    let multipleTypes = Array.from(filteredCollection)
      .map((item) => item.value)
      .join(",");

    // console.log(multipleTypes);

    // console.log(filter);
    // console.log(query);

    searchResults = await getSearchForItem(query, multipleTypes);
    setResults(searchResults);
    console.log(searchResults);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="searchtype">Select Search Type: </label>
          <select multiple required id="searchtype" name="filter">
            <option value="">Select...</option>
            <option value="album">album</option>
            <option value="artist">artist</option>
            <option value="playlist">playlist</option>
            <option value="track">track</option>
            <option value="show">show</option>
            <option value="episode">episode</option>
            <option value="audiobook">audiobook</option>
          </select>
        </p>
        <label>
          Type what you want to search:{" "}
          <input type="search" name="enteredText" />
        </label>
      </form>
      <ul>
        {results
          ? Object.entries(results).map(([key, innerObject]) => (
              <h3 key={key}>{key}</h3>
              // {innerObject.items.map((item)=>(
              //   <p>{album_type}</p>
              // ))}
            ))
          : ""}
      </ul>
    </>
  );
}
