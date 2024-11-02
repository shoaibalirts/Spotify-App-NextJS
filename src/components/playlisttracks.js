"use client";
export default function Playlisttracks({ tracksData }) {
  return (
    <article>
      <h3>{tracksData.trackTitle}</h3>
      <p>{tracksData.albumName}</p>
      <p>{tracksData.createdDate}</p>
      <p>{tracksData.duration}</p>
    </article>
  );
}
