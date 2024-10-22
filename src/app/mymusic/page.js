"use client";
import { useEffect } from "react";
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
        console.log(token);
        // Store the token securely (e.g., in state or secure storage)
        // Then clear the hash to remove the token from the URL
        window.location.hash = "";
      }
    }
  }, []);

  return;
}
