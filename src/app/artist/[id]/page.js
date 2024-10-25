import { getArtist } from "@lib/spotifyapi";
export default async function getArtistPage({ params }) {
  const { id } = await params;
  const data = await getArtist(id);
  console.log(data);

  return null;
}
