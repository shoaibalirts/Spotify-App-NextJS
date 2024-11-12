import classes from "./SearchMultipleItems.module.css";
import Image from "next/image";
export default function SearchArtists({ results }) {
  return (
    <ul>
      <h2 className={classes.header}>Artists</h2>
      {results.artists.map((artist, index) => (
        <li key={`artist-${index}`}>
          <article className={classes.article}>
            <h3>Artist: {artist.name}</h3>
            <Image
              className={classes.image}
              src={artist.images[1].url}
              priority
              width={artist.images[1].width}
              height={artist.images[1].height}
              alt="artist image"
            />
            <p>Genres: {artist.genres}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
