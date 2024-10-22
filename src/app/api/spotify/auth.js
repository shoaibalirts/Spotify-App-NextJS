// set up the api route
// pages/api/spotify/auth.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/mymusic",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successfully retrieved access token
      return res.status(200).json(data);
    } else {
      // Handle errors
      return res.status(response.status).json({ error: data.error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
