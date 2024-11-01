// const querystring = require("querystring");
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Login from "@/components/login";

export default async function Home() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token_cookie");

  const authEndPoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/featured";
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-library-read",
  ];

  const loginUrl = `${authEndPoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;
  // conditional rendering
  if (tokenCookie) {
    redirect("/featured");
  }
  return <Login loginData={loginUrl} />;
}

// "https://accounts.spotify.com/authorize?client_id=81a35df4b29149208ae83b5defff691a&redirect_uri=http://localhost:3000/featured&scope=user-read-currently-playing%20user-read-recently-played&response_type=token&&show_dialog=true"

//
// redirected to:
//http://localhost:3000/featured

// const loginUrl1 =
//   "https://accounts.spotify.com/authorize?" +
//   querystring.stringify({
//     response_type: "code",
//     client_id: clientId,
//     scope: scopes.join("%20"),
//     redirect_uri: redirectUri,
//   });
