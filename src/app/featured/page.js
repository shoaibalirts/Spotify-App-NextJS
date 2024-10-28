"use client";
import { setCookie } from "cookies-next";

import { useState, useEffect } from "react";
import { getNewReleases } from "@/lib/spotifyapi";
import Featured from "@/components/featured";
import Link from "next/link";

export default function FeaturedPage() {
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
        console.log("Token: " + token);
        setCookie("token_cookie", token, { path: "/" });

        // Store the token securely (e.g., in state or secure storage)
        // Then clear the hash to remove the token from the URL
        window.location.hash = "";
      }
    }
  }, []);

  useEffect(() => {
    async function fetchAlbumsLists() {
      try {
        const lists = await getNewReleases();
        setAlbums(lists);
      } catch (error) {
        console.error("Error fetching playlists", error);
      }
    }
    fetchAlbumsLists();
  }, []);

  // useEffect(() => {
  //   async function xyz() {
  //     const lists = await getFeaturedPlayLists();
  //     console.log(lists.albums.items);
  //     // setAlbums(lists.albums.items);
  //   }
  //   xyz();
  // }, []);

  console.log(albums);

  return (
    <>
      <Link href={`/category`}>Categories</Link>
      <h2>Featured</h2>
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
