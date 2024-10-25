import Albums from "@/components/albums";
import { getAlbumsTracks } from "@/lib/spotifyapi";

export default async function PlayListPage({ params }) {
  const { id } = await params;

  const data = await getAlbumsTracks(id);

  console.log(data.items);

  return <Albums tracks={data.items} />;
}
