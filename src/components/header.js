"use client";
import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmSignoutModal from "./ConfirmSignoutModal";
import { deleteCookie, hasCookie } from "@/lib/spotifyapi";
import Navlinks from "./navlinks";

export default function Header({ navLinks, children }) {
  const [showModal, setShowModal] = useState(false);
  const [hasMyCookie, setHasMyCookie] = useState(false);
  const [showNavSideBarLinks, setShowNavSideBarLinks] = useState(false);
  const router = useRouter();
  function handleSignout() {
    deleteCookie("token_cookie");
    router.push("/");
  }
  async function checkCookie() {
    setHasMyCookie(await hasCookie("token_cookie"));
  }
  useEffect(() => {
    checkCookie();
  }, []);

  function showNavSideBar() {
    setShowNavSideBarLinks((prevState) => !prevState);
  }
  function handleBack() {
    router.back();
  }

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Image
              src="/images/leftarrow.png"
              priority
              alt="left arrow to go back to the previous visited page"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
              onClick={handleBack}
            />
          </li>
          <li className={classes.heading}>{children}</li>
          <li>
            <Link href="/search" alt="search page ">
              <Image
                src="/images/search.png"
                priority
                alt="search via spotify api"
                width={20}
                height={20}
                style={{ filter: "invert(1)" }}
              />
            </Link>
          </li>

          <li>
            {hasMyCookie ? (
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className={classes.signout}
              >
                Signout
              </button>
            ) : (
              <p>Logging...........</p>
            )}
          </li>

          <li>
            <button onClick={showNavSideBar}>Menu</button>
          </li>
        </ul>
      </nav>
      {showModal && (
        <ConfirmSignoutModal
          onConfirm={() => {
            handleSignout();
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
          showModal={showModal}
        />
      )}
      {showNavSideBarLinks && <Navlinks navLinks={navLinks} />}
    </header>
  );
}
