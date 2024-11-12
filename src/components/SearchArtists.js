export default function SearchArtists({ results }) {
    return <ul>
    {results.artists.map((artist, index) => (
      <li key={`artist-${index}`}>
        <p>Name: {artist.name}</p>
        {/* Add other artist details if needed */}
      </li>
    ))}
  </ul>
}
