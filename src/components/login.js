import Link from "next/link";

export default function Login({ login }) {
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
        <Link href={login} className="loginlink">
          LOG IN
        </Link>
      </form>
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
