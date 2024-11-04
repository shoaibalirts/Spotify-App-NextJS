import PlaylistDetails from "@/components/playlistdetails";

import { getDetailsOfASpecificPlaylist } from "@/lib/spotifyapi";
export default async function PlaylistIdPage({ params }) {
  const { playlistID } = await params;

  //   console.log(playlistID);

  // fetch details of a specific playlist based on a playlist id
  const tracks = await getDetailsOfASpecificPlaylist(playlistID);
  console.log(tracks);

  //
  const trackArr = [
    playlistID,
    tracks.images[0].url,
    tracks.name,
    tracks.tracks.items,
  ];
  console.log(trackArr);

  // now we have to fetch
  return <PlaylistDetails tracksData={trackArr} />;
}
