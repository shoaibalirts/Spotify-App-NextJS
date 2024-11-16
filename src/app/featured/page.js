import { setCookie } from "cookies-next";
import { getNewReleases } from "@/lib/spotifyapi";
import Featured from "@/app/featured/featured";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cookies } from "next/headers";
// import { useState } from "react";
export default async function FeaturedPage() {
  const lists = await getNewReleases();
  console.log(lists);

  // setAlbums(lists);

  // fetchAlbumsLists();

  // console.log(albums);
  return (
    <>
      {/* <p>
        <Link href={`/category`}>Categories</Link>
      </p>
      <p>
        <Link href={`/usersavedalbums`}>User Saved Albums</Link>
      </p>
      <p>
        <Link href={`/playlist`}>Get Play List</Link>
      </p> */}
      <Header>Featured</Header>
      <main>
        <h2 className="headingInGradiantColor">Featured</h2>

        <section className="flex flex-col gap-4 items-center">
          {lists
            ? lists.albums.items.map((album) => (
                <Link key={album.id} href={`/album/${album.id}`}>
                  <Featured album={album} />
                </Link>
              ))
            : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
