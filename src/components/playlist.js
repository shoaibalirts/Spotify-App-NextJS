"use client";
import classes from "./playlist.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Playlist({ playlistData }) {
  console.log(playlistData);

  const [id, message, name, owner, totalTracks] = playlistData;
  //   console.log(trackItems);

  return (
    <Link href={`/playlist/${id}`}>
      <section>
        <p>{message}</p>
        <p>{name}</p>
        <p>Created by: {owner}</p>
        <p>{totalTracks} songs</p>
        {/* <p>{trackItems[0].track.name}</p> */}
      </section>
    </Link>
  );
}
