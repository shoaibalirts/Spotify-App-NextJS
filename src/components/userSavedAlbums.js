"use client";

import Image from "next/image";

export default function UserSavedAlbums({ savedAlbums }) {
  console.log(savedAlbums);

  let count = 0;
  function newKey() {
    return count++;
  }
  return (
    <>
      {savedAlbums.map((item) => (
        <article key={newKey()} className="savedalbumsarticle">
          {/* <h2>{item.album.name}</h2> */}
          <p>Added on {item.added_at}</p>
          <Image
            src={item.album.images[0].url}
            alt={item.album.name}
            width={640}
            height={640}
            priority
          />
        </article>
      ))}
    </>
  );
}
