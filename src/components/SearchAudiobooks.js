"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
export default function SearchAudiobooks({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Audiobooks</h2>
      {/* {results.audiobooks.map((track, index) => (
        <li key={`audiobook-${index}`}>
          <article className={classes.article}>
            <h3>Audio: {audiobook.name}</h3>
            <Image
              className={classes.image}
              src={audiobook.images[1].url}
              priority
              width={300}
              height={300}
              alt="audiobook image"
            />
            <p>Audiobook Name: {audiobook.name}</p>
            <p>Audiobook Duration: {GetDurationInMinAndSec(audiobook.duration_ms)}</p>
            <p>Audiobook Name: {audiobook.name}</p>
            <time dateTime="2018-07-07">
              Audiobook Released on: {audiobook.release_date}
            </time>
            <p>Album Total Tracks: {track.album.total_tracks}</p>
          </article>
        </li>
      ))} */}
    </ul>
  );
}
