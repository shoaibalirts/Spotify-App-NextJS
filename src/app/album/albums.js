import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
import Link from "next/link";
import Header from "@/components/header";
import playIcon from "../../../public/images/play.png";
import Image from "next/image";
import classes from "./albums.module.css";
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
            <li
              key={track.name}
              className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <article className="flex items-center justify-center">
                <Image
                  className="rounded-full w-9 h-9"
                  src="/images/play.png"
                  priority
                  alt="play icon"
                  width={10}
                  height={10}
                  style={{ filter: "invert(1)" }}
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                  <h2>{track.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {track.artists[0].name}
                  </p>
                </div>
                <time>{GetDurationInMinAndSec(track.duration_ms)}</time>
              </article>
              {/* <p>trackId: {track.artists[0].id}</p> */}
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

/*
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
<figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture">
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
        </figcaption>    
    </figure>
*/
