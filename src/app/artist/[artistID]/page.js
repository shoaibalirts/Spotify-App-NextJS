import { getArtist } from "@/lib/spotifyapi";
import Header from "@/components/header";
import Artist from "./artist";
import Footer from "@/components/footer";
export default async function ArtistPage({ params }) {
  console.log("params1", params);
  const { artistID } = await params;
  console.log(artistID);

  let data;
  try {
    data = await getArtist(artistID);
  } catch (error) {
    console.error("error fetching artist data", error);
  }
  // console.log("artistID", artistID);

  //   console.log(data.items);

  console.log("artist data", data);

  return (
    <>
      <Header>Artists</Header>
      <main>
        <Artist genres={data.genres} />
      </main>
      <Footer />
    </>
  );
}
