"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
export default function SearchShows({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Shows</h2>
      {results.shows.map((show, index) => (
        <li key={`show-${index}`}>
          <article className={classes.article}>
            <h3>Show: {show.name}</h3>
            <Image
              className={classes.image}
              src={show.images[1].url}
              priority
              width={300}
              height={300}
              alt="show image"
            />
            <p>Show Description: {show.description}</p>
            <p>Total Episodes: {show.total_episodes}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
