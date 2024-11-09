import Image from "next/image";

export default function Featured({ album }) {
  return (
    // <article className="border rounded p-4" key={album.images[0].url}>
    //   <Image
    //     src={album.images[0].url}
    //     width={300}
    //     height={300}
    //     alt="album"
    //     priority={true}
    //   />
    //   <p>{album.name}</p>
    // </article>

    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <Image
        className="rounded-lg"
        src={album.images[0].url}
        width={300}
        height={300}
        alt="album"
        priority={true}
      />
      <figcaption className="absolute px-4 text-lg text-center font-bold text-white bottom-6">
        <p>{album.name}</p>
      </figcaption>
    </figure>
  );
}
