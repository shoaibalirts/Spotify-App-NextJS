"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import classes from "./error.module.css";
export default function Error() {
  function redirectToAuth() {
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    console.log(authUrl);

    authUrl.searchParams.append(
      "client_id",
      "81a35df4b29149208ae83b5defff691a"
    );
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append(
      "redirect_uri",
      "http://localhost:3000/api/callback"
    );
    authUrl.searchParams.append("state", "djvfsjfvsjhfvsjhdfvsdfjv");
    authUrl.searchParams.append(
      "scope",
      "user-read-private user-read-email user-library-read"
    );
    authUrl.searchParams.append("show_dialog", "true");

    window.location.href = authUrl.toString();
  }
  return (
    <>
      <Header>Logout/Error</Header>
      <main className={classes.main}>
        <h1 className={classes.header}>
          Spotify time limit of one hour is exceeded so you are logged out from
          the Spotify System
        </h1>
        <p className={classes.error}>
          Unfortunately, we could not find the requested page or resource.
        </p>

        <p className={classes.login}>
          <button onClick={redirectToAuth} className={classes.loginButton}>
            LOG IN
          </button>
        </p>
      </main>
      <Footer />
    </>
  );
}
