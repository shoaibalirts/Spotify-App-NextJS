"use server";
import {
  getAPlaylistItemsContainingTracksAndEpisodes,
  getFeaturedPlayLists,
} from "@/lib/spotifyapi";
import Playlisttracks from "@/app/playlist/[playlistID]/tracks/playlisttracks";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default async function TracksPage({ params }) {
  const { playlistID } = await params;
  const tracksData = await getAPlaylistItemsContainingTracksAndEpisodes(
    playlistID
  );
  let foundItemIndex;
  // getFeaturedPlayLists give me the image which is to be displayed on {playlist_id}/tracks
  const featuredPlayList = await getFeaturedPlayLists();
  if (featuredPlayList != null) {
    // check when both id's are same then get only featuredPlayList.playlists.items.images[0].url
    // featuredPlayList.playlists.items.id === playlistID
    foundItemIndex = featuredPlayList.playlists.items.findIndex(
      (item) => item.id === playlistID
    );
    console.log(foundItemIndex);
    console.log("playlistID", playlistID);

    console.log(
      "playlistitemsId:",
      featuredPlayList.playlists.items[foundItemIndex].id
    );
  }
  // imgSrc:featuredPlayList.playlists.items[foundItemIndex].images[0],

  return (
    <>
      <Header
        navLinks={["playlist", "category", "usersavedalbums", "featured"]}
      >
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
                      imgSrc: item.track.album.images[1],
                      trackTitle: item.track.name,
                      albumName: item.track.album.name,
                      createdDate: item.added_at,
                      duration: item.track.duration_ms,
                      playlistData:
                        featuredPlayList.playlists.items[foundItemIndex],
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
