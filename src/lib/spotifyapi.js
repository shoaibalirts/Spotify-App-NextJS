"use server";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

export async function getNewReleases() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");
  // if (token === undefined) {
  //   redirect("/");
  // }
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  console.log("token", token);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=10",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
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
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
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
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories?limit=50",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
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
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
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
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch("https://api.spotify.com/v1/me/albums", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token})}`,
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
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?limit=50",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
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

// details of a specific playlist (according to playlist id)
export async function getDetailsOfASpecificPlaylist(playlistId) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// details of a specific playlist (according to playlist id)
export async function getAPlaylistItemsContainingTracksAndEpisodes(playlistId) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=20`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCookie(name) {
  const cookieStore = await cookies();
  (await cookies()).delete(name);

  return null;
}
export async function hasCookie(name) {
  const cookieStore = await cookies();
  const hasCookie1 = cookieStore.has(name);

  return hasCookie1;
}

export async function getSearchForItem(query, multipleTypes) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_cookie");
  const tokenData = JSON.parse(cookieStore.get("token_cookie").value);
  // array destructured
  // const [filteredValue1, filteredValue2] = filteredCollection;
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=${multipleTypes}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token})}`,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
