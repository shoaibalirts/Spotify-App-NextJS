import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";
import classes from "./albums.module.css";
export default function Albums({ tracks }) {
  console.log(tracks);
  //   console.log(tracks[0].artists[0].id);
  //   console.log(tracks[0].artists[0]);
  return (
    <>
      <Header>Music</Header>
      <main>
        <ul>
          <h2 className={classes.header}>All Songs</h2>
          {tracks.map((track) => (
            // <Link href={`/artist/${track.artists[0].id}`}>
            <li key={track.name} className={classes.listitem}>
              <article className={classes.article}>
                <div className={classes.imagecontainer}>
                  <Image
                    src="/images/play.svg"
                    priority
                    alt="play icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={classes.nameartistcontainer}>
                  <h2 className={classes.trackname}>{track.name}</h2>
                  <p className={classes.trackartist}>{track.artists[0].name}</p>
                </div>
                <time className={classes.timeduration}>
                  {GetDurationInMinAndSec(track.duration_ms)}
                </time>
              </article>
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
