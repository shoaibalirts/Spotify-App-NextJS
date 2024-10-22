export default function Home() {
  const authEndPoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/featured";
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const scopes = ["user-read-currently-playing", "user-read-recently-played"];

  const loginUrl = `${authEndPoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;
  return <a href={loginUrl}>My Login to Spotify</a>;
}
