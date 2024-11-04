"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
export default function PlaylistDetails({ tracksData }) {
  const [playlistID, imgSrc, name, items] = tracksData;
  // console.log(name);
  // console.log(items);

  return (
    <>
      <Header navLinks={["playlist", "category", "usersavedalbums"]}>
        Details of a "{name}" playlist
      </Header>
      <main>
        <section>
          <h2></h2>
          <Link href={`/playlist/${playlistID}/tracks`}>
            <Image src={imgSrc} alt={name} width={300} height={300} priority />
            <p>{name}</p>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
