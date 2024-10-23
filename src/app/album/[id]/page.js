import { getAlbums } from "@/lib/spotifyapi";

export default async function PlayListPage({ params }) {
  const { id } = await params;

  const data = await getAlbums(id);

  console.log(data);
  return null;
}
