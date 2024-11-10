"use client";
import classes from "./playlisttracks.module.css";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
import Image from "next/image";
export default function Playlisttracks({ tracksData }) {
  const trackDuration = GetDurationInMinAndSec(tracksData.duration);
  console.log(tracksData);
  return (
    <>
      <div className={classes.header}>
        <Image
          src={tracksData.playlistData.images[0].url}
          width={300}
          height={300}
          alt="Featured Playlist"
          priority
        />
        <p>{tracksData.playlistData.name}</p>
        <p>{tracksData.playlistData.owner.display_name}</p>
        <p>{tracksData.playlistData.tracks.total}</p>
      </div>

      <article>
        <Image
          src={tracksData.imgSrc.url}
          width={300}
          height={300}
          alt={tracksData.trackTitle}
          priority
        />
        <h3>{tracksData.trackTitle}</h3>
        <p>{tracksData.albumName}</p>
        <p>{tracksData.createdDate}</p>
        <p>{trackDuration}</p>
      </article>
    </>
  );
}
