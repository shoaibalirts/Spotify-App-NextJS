"use client";
import Header from "@/components/header";
import { useState } from "react";
import { getSearchForItem } from "@/lib/spotifyapi";
import SearchAlbums from "@/components/SearchAlbums";
import SearchArtists from "@/components/SearchArtists";
import SearchPlaylists from "@/components/SearchPlaylists";
import SearchTracks from "@/components/SearchTracks";
import SearchShows from "@/components/SearchShows";
import SearchEpisodes from "@/components/SearchEpisodes";
import SearchAudiobooks from "@/components/SearchAudiobooks";

export default function Search() {
  const [results, setResults] = useState({ albums: [], artists: [] });
  const [selectedCategory, setSelectedCategory] = useState(null); // Track which category is selected

  let data;
  let searchResults;
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
      .map((item) => item.value)
      .join(",");

    // console.log(multipleTypes);

    // console.log(filter);
    // console.log(query);

    searchResults = await getSearchForItem(query, multipleTypes);
    console.log(searchResults);
    setResults({
      albums: searchResults.albums ? searchResults.albums.items : [],
      artists: searchResults.artists ? searchResults.artists.items : [],
      playlists: searchResults.playlists ? searchResults.playlists.items : [],
      tracks: searchResults.tracks ? searchResults.tracks.items : [],
      shows: searchResults.shows ? searchResults.shows.items : [],
      episodes: searchResults.episodes ? searchResults.episodes.items : [],
      audiobooks: searchResults.audiobooks
        ? searchResults.audiobooks.items
        : [],
    });
    // console.log(searchResults[Object.keys(searchResults)[0]]); // results["albums"] should consol albums object
    /*
    let myObjResult;
    for (let i = 0; i < Object.keys(searchResults).length; i++) {
      myObjResult[i] = await searchResults[Object.keys(searchResults)[i]];
    }
    setResults(myObjResult);
    */
    /*
    // Flatten results from all categories (like albums, artists, etc.) into a single array
    const allResults = Object.keys(searchResults)
      .map((key) => searchResults[key].items) // Get items for each category
      .flat(); // Flatten nested arrays into one array

    setResults(allResults);
    */
  }
  /*
  function renderObjectData() {
    return (
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    );
  }
  */
  function renderSelectedCategoryData() {
    if (selectedCategory === "albums") {
      return <SearchAlbums results={results} />;
    } else if (selectedCategory === "artists") {
      return <SearchArtists results={results} />;
    } else if (selectedCategory === "playlists") {
      return <SearchPlaylists results={results} />;
    } else if (selectedCategory === "tracks") {
      return <SearchTracks results={results} />;
    } else if (selectedCategory === "shows") {
      return <SearchShows results={results} />;
    } else if (selectedCategory === "episodes") {
      return <SearchEpisodes results={results} />;
    } else if (selectedCategory === "audiobooks") {
      return <SearchAudiobooks results={results} />;
    } else {
      return <p>Select a category to view results.</p>;
    }
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
      {/* <ul>{results ? <p>{results[0].items[0].album_type}</p> : ""}</ul> */}
      <div>
        <button onClick={() => setSelectedCategory("albums")}>Albums</button>
        <button onClick={() => setSelectedCategory("artists")}>Artists</button>
        <button onClick={() => setSelectedCategory("playlists")}>
          Playlists
        </button>
        <button onClick={() => setSelectedCategory("tracks")}>Tracks</button>
        <button onClick={() => setSelectedCategory("shows")}>Shows</button>
        <button onClick={() => setSelectedCategory("episodes")}>
          Episodes
        </button>
        <button onClick={() => setSelectedCategory("audiobooks")}>
          Audiobooks
        </button>
      </div>
      {/* {renderObjectData()} */}
      {renderSelectedCategoryData()}
    </>
  );
}
