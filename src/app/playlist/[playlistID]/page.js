import Playlisttracks from "@/components/playlisttracks";
import { getTracksAgainstPlaylistId } from "@/lib/spotifyapi";
export default async function PlaylistIdPage({ params }) {
  const { playlistID } = await params;

  //   console.log(playlistID);

  // here we have to fetch tracks data instead of playlist-->page.js
  // fetch tracks
  const tracks = await getTracksAgainstPlaylistId(playlistID);
  console.log(tracks);

  //
  const trackArr = [tracks.images[0].url, tracks.name, tracks.tracks.items];
  console.log(trackArr);

  // now we have to fetch
  return <Playlisttracks tracksData={trackArr} />;
}
