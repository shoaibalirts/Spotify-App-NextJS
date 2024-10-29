import { getUserSavedAlbums } from "@/lib/spotifyapi";

export default async function UserSavedAlbumsPage() {
  try {
    const userSavedAlbums = await getUserSavedAlbums();
    console.log(userSavedAlbums);
  } catch (error) {
    console.error("Error fetching user saved albums", error);
  }

  return <h1>User Saved Albums</h1>;
}
