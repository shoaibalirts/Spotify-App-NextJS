import { getCookie } from "cookies-next";
export async function getFeaturedPlayLists() {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases?limit=10",
      {
        headers: {
          Authorization: `Bearer ${getCookie("token_cookie")}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
