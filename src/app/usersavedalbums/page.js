import { getUserSavedAlbums } from "@/lib/spotifyapi";
import UserSavedAlbums from "@/app/usersavedalbums/userSavedAlbums";
import Header from "@/components/header";
export default async function UserSavedAlbumsPage() {
  const userSavedAlbums = await getUserSavedAlbums();
  console.log(userSavedAlbums);

  return (
    <>
      <Header navLinks={["playlist", "category", "usersavedalbums"]}>
        User Saved Albums
      </Header>
      <main>
        <UserSavedAlbums savedAlbums={userSavedAlbums.items} />
      </main>
    </>
  );
}
