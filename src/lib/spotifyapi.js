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

export async function getAlbumsTracks(id) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token.value})}`,
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

///// working on categories /////
export async function getCategories() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token.value})}`,
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
// fetching playlists and not genres
export async function getPlayListAgainstCategory(id) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${token.value})}`,
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

// Get user saved albums
export async function getUserSavedAlbums() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/albums?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token.value})}`,
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

/*
export async function getAlbums(id) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${id}/track`,
      {
        headers: {
          Authorization: `Bearer ${token.value})}`,
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

*/
