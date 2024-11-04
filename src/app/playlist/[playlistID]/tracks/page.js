"use server";
import { getAPlaylistItemsContainingTracksAndEpisodes } from "@/lib/spotifyapi";
import Playlisttracks from "@/app/playlist/[playlistID]/tracks/playlisttracks";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default async function TracksPage({ params }) {
  const { playlistID } = await params;

  const tracksData = await getAPlaylistItemsContainingTracksAndEpisodes(
    playlistID
  );
  // console.log(tracksData.items[0].track);

  return (
    <>
      <Header navLinks={["playlist", "category", "usersavedalbums"]}>
        Tracks
      </Header>
      <main>
        <section>
          <ul>
            {tracksData.items.map((item) =>
              item.track ? (
                <li key={item.track.name}>
                  <Playlisttracks
                    tracksData={{
                      trackTitle: item.track.name,
                      albumName: item.track.album.name,
                      createdDate: item.added_at,
                      duration: item.track.duration_ms,
                    }}
                  />
                </li>
              ) : null
            )}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
