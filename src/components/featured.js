export default function Featured({ albums }) {
  console.log(albums.albums.items[0].images[0].url);
  //   return albums.albums.items.map((myItem) => {
  //     return (
  //       <article key={myItem.images[0].url}>
  //         <img src={myItem.images[0].url} />
  //         <p>{myItem.name}</p>
  //       </article>
  //     );
  //   });
  return (
    <article className="featured-component">
      <h1 className="articleheader">Featured</h1>
      <img src={albums.albums.items[1].images[0].url} />
      <p>{albums.albums.items[1].name}</p>
    </article>
  );
}
