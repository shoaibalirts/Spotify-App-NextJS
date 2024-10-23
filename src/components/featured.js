import Image from "next/image";

export default function Featured({ album }) {
  return (
    <article className="border rounded p-4" key={album.images[0].url}>
      <Image src={album.images[0].url} width={300} height={300} alt="crazy" />
      <p>{album.name}</p>
    </article>
  );
}
