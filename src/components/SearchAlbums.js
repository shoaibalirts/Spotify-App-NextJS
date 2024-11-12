"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
export default function SearchAlbums({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Albums</h2>
      {results.albums.map((album, index) => (
        <li key={`album-${index}`}>
          <article className={classes.article}>
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
        </li>
      ))}
    </ul>
  );
}
