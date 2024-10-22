"use client";
import { setCookie } from "cookies-next";
import { useEffect } from "react";
import { getFeaturedPlayLists } from "@/lib/spotifyapi";

export default function MyMusicPage() {
  useEffect(() => {
    const hash = window.location.hash; //true/false
    if (hash) {
      const token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      if (token) {
        // Use the token
        // console.log(token);
        setCookie("token_cookie", token);
        // Store the token securely (e.g., in state or secure storage)
        // Then clear the hash to remove the token from the URL
        window.location.hash = "";
      }
    }
  }, []);

  useEffect(() => {
    async function xyz() {
      const lists = await getFeaturedPlayLists();
      console.log(lists);
    }
    xyz();
  }, []);

  return;
}
