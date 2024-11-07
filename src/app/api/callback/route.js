import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req) {
  const code = req.nextUrl.searchParams.get("code");
  const client_id = "81a35df4b29149208ae83b5defff691a";
  const client_secret = "68676b1e1595436e891a183bb988f770";

  const encodedCredentials = Buffer.from(
    client_id + ":" + client_secret
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:3000/api/callback",
    }).toString(),
    headers: {
      Authorization: "Basic " + encodedCredentials,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();
  const cookieStore = await cookies();
  cookieStore.set(
    "token_cookie",
    JSON.stringify({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      fetch_date: Date.now() / 1000,
    }),
    { httpOnly: true, maxAge: 3600 }
  );

  redirect("/featured");
}
