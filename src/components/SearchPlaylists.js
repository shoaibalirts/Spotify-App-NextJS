"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
export default function SearchPlaylists({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Playlists</h2>
      {results.playlists.map((playlist, index) => (
        <li key={`playlist-${index}`}>
          <article className={classes.article}>
            <h3>Playlist: {playlist.name}</h3>
            <img
              className={classes.image}
              src={playlist.images[0].url}
              width={300}
              height={300}
              alt="album image"
            />
            <p>Total Tracks: {playlist.tracks.total}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
