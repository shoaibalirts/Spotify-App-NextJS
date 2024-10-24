"use server";
import { cookies } from "next/headers";

export async function getNewReleases() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");
  console.log("token", token);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=10",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAlbums(id) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value})}`,
      },
    });
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
