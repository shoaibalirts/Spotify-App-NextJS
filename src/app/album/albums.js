import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
import Link from "next/link";
import Header from "@/components/header";
export default function Albums({ tracks }) {
  console.log(tracks);
  //   console.log(tracks[0].artists[0].id);
  //   console.log(tracks[0].artists[0]);
  return (
    <>
      <Header navLinks={["playlist", "category", "usersavedalbums"]}>
        All Songs
      </Header>
      <main>
        <ul>
          {tracks.map((track) => (
            // <Link href={`/artist/${track.artists[0].id}`}>
            <li key={track.name}>
              <h2>{track.name}</h2>
              <p>{track.artists[0].name}</p>
              <p>{GetDurationInMinAndSec(track.duration_ms)}</p>

              <p>trackId: {track.artists[0].id}</p>
            </li>
            // </Link>
          ))}
        </ul>
      </main>
    </>
  );
}
/* <li>
        <p>songname: {items[0].name}</p>
        <p>artistsid: {items[0].artists[0].id}</p>
        <p>songartistname: {items[0].artists[0].name}</p>
        <p>songduration: {items[0].duration_ms / 1000}</p>
      </li> */
