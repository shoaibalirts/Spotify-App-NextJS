import { getUserSavedAlbums } from "@/lib/spotifyapi";
import UserSavedAlbums from "@/components/userSavedAlbums";
export default async function UserSavedAlbumsPage() {
  const userSavedAlbums = await getUserSavedAlbums();
  console.log(userSavedAlbums);

  return (
    <>
      <header>
        <h1>User Saved Albums</h1>
      </header>
      <main>
        <UserSavedAlbums savedAlbums={userSavedAlbums.items} />
      </main>
    </>
  );
}
