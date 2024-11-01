import Playlisttracks from "@/components/playlisttracks";
import { getTracksAgainstPlaylistId } from "@/lib/spotifyapi";
export default async function PlaylistIdPage({ params }) {
  const { id } = await params.playlistID;
  console.log(id);

  // here we have to fetch tracks data instead of playlist-->page.js
  // fetch tracks
  const tracks = await getTracksAgainstPlaylistId(id);
  console.log(tracks);

  // now we have to fetch
  return <Playlisttracks tracksData={tracks} />;
}
