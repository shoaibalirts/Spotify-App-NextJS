"use client";
import { setCookie } from "cookies-next";
import { useEffect } from "react";
import { getFeaturedPlayLists } from "@/lib/spotifyapi";
import { useState } from "react";
import Featured from "@/components/featured";
import Link from "next/link";

export default function MyMusicPage() {
  const [albums, setAlbums] = useState(null);

  if (albums) console.log(albums);

  useEffect(() => {
    const hash = window.location.hash; //true/false
    if (hash) {
      const token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      if (token) {
        // Use the token
        // console.log(token);
        setCookie("token_cookie", token);
        // Store the token securely (e.g., in state or secure storage)
        // Then clear the hash to remove the token from the URL
        window.location.hash = "";
      }
    }
  }, []);

  useEffect(() => {
    async function fetchPlayLists() {
      try {
        const lists = await getFeaturedPlayLists();
        setAlbums(lists);
      } catch (error) {
        console.error("Error fetching playlists", error);
      }
    }
    fetchPlayLists();
  }, []);

  // useEffect(() => {
  //   async function xyz() {
  //     const lists = await getFeaturedPlayLists();
  //     console.log(lists.albums.items);
  //     // setAlbums(lists.albums.items);
  //   }
  //   xyz();
  // }, []);

  return (
    <>
    <h1>Featured</h1>
      <section className="flex flex-col gap-4 items-center">
        {albums
          ? albums.albums.items.map((album) => (
              <Link key={album.id} href={`/album/${album.id}`}>
                <Featured album={album} />
              </Link>
            ))
          : null}
      </section>
    </>
  );
}
