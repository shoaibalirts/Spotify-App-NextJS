"use client";
import Image from "next/image";
import classes from "./SearchAlbums.module.css";
export default function SearchAlbums({ results }) {
  return (
    <ul>
      {results.albums.map((album, index) => (
        <li key={`album-${index}`}>
          <article className={classes.album}>
            <h3>Album: {album.name}</h3>
            <Image
              className={classes.image}
              src={album.images[1].url}
              priority
              width={album.images[1].width}
              height={album.images[1].height}
              alt="album image"
            />
            <time dateTime="2018-07-07">Released on: {album.release_date}</time>
            <p>Total Tracks: {album.total_tracks}</p>
          </article>
          {/* Add other album details if needed */}
        </li>
      ))}
    </ul>
  );
}
