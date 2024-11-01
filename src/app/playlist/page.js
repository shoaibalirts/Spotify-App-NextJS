"use server";

import Playlist from "@/components/playlist";
import {
  getFeaturedPlayLists,
  getTracksAgainstPlaylistId,
} from "@/lib/spotifyapi";

export default async function PlayListPage() {
  const featuredPlayList = await getFeaturedPlayLists();

  // fetch tracks
  const tracks = await getTracksAgainstPlaylistId(
    featuredPlayList.playlists.items[0].id
  );

  const playlistData = [
    featuredPlayList.playlists.items[0].images[0].url,
    featuredPlayList.message,
    featuredPlayList.playlists.items[0].name,
    featuredPlayList.playlists.items[0].owner.display_name,
    featuredPlayList.playlists.items[0].tracks.total,
    tracks.tracks.items[0].track.name,
  ];
  // console.log(playlistData);

  return <Playlist playlistData={playlistData} />;
}
