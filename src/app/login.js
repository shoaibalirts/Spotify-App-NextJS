"use client";
// import Link from "next/link";

export default function Login() {
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
    <section className="login-component">
      <h1 className="loginheader">Log In</h1>
      <form className="loginform">
        <label className="loginlabel loginlabelusername">Username</label>
        <div className="inputandimage">
          <input
            type="text"
            name="username"
            className="logininput"
            placeholder="Enter you username"
          />
          <img src="/images/loginperson.png" alt="login person" />
        </div>
        <hr className="hr" />
        <label className="loginlabel loginlabelpassword">Password</label>
        <div className="inputandimage">
          <input
            type="password"
            name="password"
            className="logininput"
            placeholder="Enter your password"
          />
          <img src="/images/loginpassword.png" alt="login key" />
        </div>
        <hr className="hr hr2" />
      </form>
      <button onClick={redirectToAuth} className="loginlink">
        LOG IN
      </button>

      <div className="fingerprintcontainer">
        <img
          src="/images/loginfingerprint.png"
          alt="finger print"
          className="fingerprintimage"
        />
      </div>
      <p className="fingerprinttext">One-Touch Login</p>
    </section>
  );
}
