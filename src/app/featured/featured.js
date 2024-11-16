"use client";
import Image from "next/image";
import classes from "./featured.module.css";
export default function Featured({ album }) {
  return (
    <figure className={classes.figure}>
      <Image
        className={classes.image}
        src={album.images[0].url}
        width={300}
        height={300}
        alt="album"
        priority={true}
      />
      <figcaption className={classes.caption}>
        <p>{album.name}</p>
        <p className={classes.soundtrack}>Soundtrack</p>
      </figcaption>
    </figure>
  );
}
