export default function Featured({ albums }) {
  //   return albums.albums.items.map((item, index) => {
  //     console.log(index);
  //     return (
  //       <div key={item.index}>
  //         <img src={item.images[index].url} />
  //         <p>hello</p>
  //       </div>
  //     );
  //   });
  console.log(albums.albums.items[0].images[0].url);
  return albums.albums.items.map((myImage) => {
    return (
      <div key={myImage.images[0].url}>
        <img src={myImage.images[0].url} />
        <p>Tak Lucas</p>
      </div>
    );
  });
}
