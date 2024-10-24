import Login from "@/components/login";

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
  return <Login login={loginUrl} />;
}
// "https://accounts.spotify.com/authorize?client_id=81a35df4b29149208ae83b5defff691a&redirect_uri=http://localhost:3000/featured&scope=user-read-currently-playing%20user-read-recently-played&response_type=token&&show_dialog=true"

//
// redirected to:
//http://localhost:3000/featured
