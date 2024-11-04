"use client";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
import Image from "next/image";
export default function Playlisttracks({ tracksData }) {
  const trackDuration = GetDurationInMinAndSec(tracksData.duration);
  console.log(tracksData);

  return (
    <article>
      <Image
        src={tracksData.imgSrc.url}
        width={300}
        height={300}
        alt={tracksData.trackTitle}
      />
      <h3>{tracksData.trackTitle}</h3>
      <p>{tracksData.albumName}</p>
      <p>{tracksData.createdDate}</p>
      <p>{trackDuration}</p>
    </article>
  );
}
