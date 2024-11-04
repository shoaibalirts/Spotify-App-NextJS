"use client";

import classes from "./playlist.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Playlist({ playlistData }) {
  const [id, imgSrc, message, name, owner, totalTracks] = playlistData;
  //   console.log(trackItems);

  return (
    <Link href={`/playlist/${id}/tracks`} className={classes.link}>
      <section className={classes.item}>
        <img src={imgSrc} width={300} height={300} alt={name} />
        {/* <p>{message}</p> */}
        <p>{name}</p>
        <p>Created by: {owner}</p>
        <p>{totalTracks} songs</p>
      </section>
    </Link>
  );
}
