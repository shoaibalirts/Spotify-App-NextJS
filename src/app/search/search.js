"use client";
import Header from "@/components/header";
import { getSearchForItem } from "@/lib/spotifyapi";
export default function Search() {
  function getSelectedValue(e) {
    console.log(e.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const filter = event.target.filter.value;
    const query = event.target.enteredText.value;
    let filteredCollection = event.target.filter.selectedOptions;
    // console.log(filteredCollection[0].value);
    // console.log(filteredCollection[1].value);
    console.log(filteredCollection);

    let multipleTypes = Array.from(filteredCollection)
      .map((item) => item.textContent)
      .join(",");

    // console.log(multipleTypes);

    // console.log(filter);
    // console.log(query);

    let searchResults = await getSearchForItem(query, multipleTypes);
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
      <ul>{/* {searchResults.map(item)=>(<li key={item}></li>)} */}</ul>
    </>
  );
}
