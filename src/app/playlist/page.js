"use server";

import Playlist from "@/components/playlist";
import {
  getFeaturedPlayLists,
  getTracksAgainstPlaylistId,
} from "@/lib/spotifyapi";

export default async function PlayListPage() {
  const featuredPlayList = await getFeaturedPlayLists();

  

  // let playlistData = [
  //   featuredPlayList.playlists.items[0].images[0].url,
  //   featuredPlayList.message,
  //   featuredPlayList.playlists.items[0].name,
  //   featuredPlayList.playlists.items[0].owner.display_name,
  //   featuredPlayList.playlists.items[0].tracks.total,
  //   tracks.tracks.items,
  // ];
  // console.log(playlistData);

  // return <Playlist playlistData={playlistData} />;
  console.log(featuredPlayList.playlists.items);
  return featuredPlayList.playlists.items.map((item) => (
    <Playlist
      key={item.id}
      playlistData={[
        item.id,
        item.message,
        item.name,
        item.owner.display_name,
        item.tracks.total,
      ]}
    />
  ));
}
