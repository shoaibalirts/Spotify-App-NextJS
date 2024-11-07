"use server";

import Playlist from "@/app/playlist/playlist";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  getFeaturedPlayLists,
  getTracksAgainstPlaylistId,
} from "@/lib/spotifyapi";

export default async function PlayListPage() {
  const featuredPlayList = await getFeaturedPlayLists();

  return (
    <>
      <Header navLinks={["featured", "category", "usersavedalbums"]}>
        List of Playlists
      </Header>
      <main>
        <section>
          {featuredPlayList.playlists.items.map((item) => (
            <article>
              <Playlist
                key={item.id}
                playlistData={[
                  item.id,
                  item.images[0].url,
                  item.message,
                  item.name,
                  item.owner.display_name,
                  item.tracks.total,
                ]}
              />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
