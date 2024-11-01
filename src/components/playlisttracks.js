"use client";

import Image from "next/image";

export default function Playlisttracks({ tracksData }) {
  const [imgSrc, name, items] = tracksData;
  console.log(name);
  console.log(items);

  return (
    <section>
      <Image src={imgSrc} alt={name} width={300} height={300} priority />
      <p>{name}</p>
    </section>
  );
}
