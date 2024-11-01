"use server";

import Playlist from "@/components/playlist";
import {
  getFeaturedPlayLists,
  getTracksAgainstPlaylistId,
} from "@/lib/spotifyapi";

export default async function PlayListPage() {
  const featuredPlayList = await getFeaturedPlayLists();

  let id = featuredPlayList.playlists.items[0].id;
  // console.log(featuredPlayList.playlists.items[0].id);
  // console.log(featuredPlayList.playlists.items[0].images[0].url);
  // console.log(featuredPlayList.playlists.items[0].name);

  // fetch tracks
  const tracks = await getTracksAgainstPlaylistId(id);
  // console.log(tracks);
  // console.log(featuredPlayList.playlists.items[0].tracks.total);

  const playlistData = [
    featuredPlayList.playlists.items[0].images[0].url,
    featuredPlayList.message,
    featuredPlayList.playlists.items[0].name,
    featuredPlayList.playlists.items[0].owner.display_name,
    featuredPlayList.playlists.items[0].tracks.total,
  ];
  console.log(playlistData);

  return <Playlist playlistData={playlistData} />;
}
