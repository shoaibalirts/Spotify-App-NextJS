const spotifyAuthUrl =
  "https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    redirect_uri: "http://localhost:3000/mymusic",
    scope: "user-read-private user-read-email",
  });

export async function GetAuthorization() {
  const response = await fetch(spotifyAuthUrl);
  const json = await response.json();
  console.log(json);
}
