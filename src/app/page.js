import querystring from "querystring";
import Link from "next/link";
export default function Home() {
  const spotifyAuthUrl =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      redirect_uri: "http://localhost:3000/mymusic",
      scope: "user-read-private user-read-email",
    });

  return <Link href={spotifyAuthUrl}>Login</Link>;
}
