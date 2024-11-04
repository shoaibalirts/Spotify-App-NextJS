"use client";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
export default function Playlisttracks({ tracksData }) {
  const trackDuration = GetDurationInMinAndSec(tracksData.duration);

  return (
    <article>
      <h3>{tracksData.trackTitle}</h3>
      <p>{tracksData.albumName}</p>
      <p>{tracksData.createdDate}</p>
      <p>{trackDuration}</p>
    </article>
  );
}
