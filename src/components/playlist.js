"use client";
import Image from "next/image";

export default function Playlist({ playlistData }) {
  //   console.log(playlistData);

  const [imgSrc, message, name, owner, totalTracks, trackName] = playlistData;
  //   console.log(imgSrc);
  //   console.log(message);
  //   console.log(name);
  //   console.log(owner);
  //   console.log(totalTracks);
  //   console.log(trackName);

  return (
    <section>
      <Image src={imgSrc} alt={message} width={300} height={300} priority />
      <p>{message}</p>
      <p>{name}</p>
      <p>Created by: {owner}</p>
      <p>
        {totalTracks} {""}songs
      </p>
      <p>{trackName}</p>
    </section>
  );
}
