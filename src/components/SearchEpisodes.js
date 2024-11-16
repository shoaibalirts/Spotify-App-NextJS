"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
export default function SearchEpisodes({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Episodes</h2>
      {results.episodes.map((episode, index) => (
        <li key={`episode-${index}`}>
          <article className={classes.article}>
            <h3>Episode: {episode.name}</h3>
            <Image
              className={classes.image}
              src={episode.images[1].url}
              priority
              width={300}
              height={300}
              alt="episode image"
            />
            <p>
              Episode Duration: {GetDurationInMinAndSec(episode.duration_ms)}
            </p>
            <time dateTime="2018-07-07">
              Episode Released on: {episode.release_date}
            </time>
          </article>
        </li>
      ))}
    </ul>
  );
}
