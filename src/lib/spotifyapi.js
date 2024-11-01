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

///// categories /////
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
// fetching playlists
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

// Get user saved albums //////////////////////////////////////////////////
export async function getUserSavedAlbums() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch("https://api.spotify.com/v1/me/albums", {
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

// Get Featured Playlists on Friday 01-11-2024
export async function getFeaturedPlayLists() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?limit=50",
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

// fetching playlist single item data against id
export async function getTracksAgainstPlaylistId(playlistId) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
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
