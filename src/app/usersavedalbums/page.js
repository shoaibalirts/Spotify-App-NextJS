import { getUserSavedAlbums } from "@/lib/spotifyapi";
import UserSavedAlbums from "@/app/usersavedalbums/userSavedAlbums";
export default async function UserSavedAlbumsPage() {
  const userSavedAlbums = await getUserSavedAlbums();
  console.log(userSavedAlbums);

  return (
    <>
      <h1>User Saved Albums</h1>
      <main>
        <UserSavedAlbums savedAlbums={userSavedAlbums.items} />
      </main>
    </>
  );
}
