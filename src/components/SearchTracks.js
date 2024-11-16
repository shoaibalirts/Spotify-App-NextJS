"use client";
import Image from "next/image";
import classes from "./SearchMultipleItems.module.css";
import GetDurationInMinAndSec from "@/utility/getDurationInMinAndSec";
export default function SearchTracks({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Tracks</h2>
      {results.tracks.map((track, index) => (
        <li key={`track-${index}`}>
          <article className={classes.article}>
            <h3>Track: {track.name}</h3>
            <Image
              className={classes.image}
              src={track.album.images[1].url}
              priority
              width={300}
              height={300}
              alt="album image"
            />
            <p>Artist Name: {track.artists[0].name}</p>
            <p>Track Duration: {GetDurationInMinAndSec(track.duration_ms)}</p>
            <p>Album Name: {track.album.name}</p>
            <time dateTime="2018-07-07">
              Album Released on: {track.album.release_date}
            </time>
            <p>Album Total Tracks: {track.album.total_tracks}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

// (
// <>
//   <div className={classes.musicPlayer}>
//     <div className={classes.header}>
//       <button className={classes.backButton}>←</button>

//       <span className={classes.status}>PLAYING</span>
//     </div>

//     <div className={classes.mainImage}>
//       <div className={classes.circle}>
//         <img src="artist-image.jpg" alt="Artist Image" />
//       </div>
//     </div>

//     <div className={classes.songInfo}>
//       <h2 className={classes.songTitle}>Don't Call Me Up</h2>
//       <p className={classes.artistName}>Mabel</p>
//     </div>

//     <div className={classes.progressBbar}>
//       <span className={classes.currentTime}>0:00</span>
//       <input
//         type="range"
//         className={classes.slider}
//         min="0"
//         max="100"
//         value="50"
//       />
//       <span className={classes.duration}>3:40</span>
//     </div>

//     <div className={classes.controls}>
//       <button className={classes.controlButton}>⏮️</button>
//       <button
//         className={classes.controlButton.playButton}
//         // className={classes.play - button}
//       >
//         ▶️
//       </button>
//       <button className={classes.controlButton}>⏭️</button>
//     </div>
//   </div>
// </>
// );
