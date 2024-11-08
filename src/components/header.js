"use client";
import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmSignoutModal from "./ConfirmSignoutModal";
import { deleteCookie, hasCookie } from "@/lib/spotifyapi";
export default function Header({ navLinks, children }) {
  const [showModal, setShowModal] = useState(false);
  const [hasMyCookie, setHasMyCookie] = useState(false);
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
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Image
              src="/images/leftarrow.png"
              priority
              alt="left arrow"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            />
          </li>
          <li className={classes.heading}>{children}</li>
          <li>
            <Image
              src="/images/search.png"
              priority
              alt="left arrow"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            />
          </li>
          <li>
            <ul className={classes.menu}>
              {navLinks.map((navlink) => (
                <li key={navlink}>
                  <Link href={`/${navlink}`} priority="true">
                    {navlink}
                  </Link>
                </li>
              ))}
            </ul>
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
              <p>Logging...</p>
            )}
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
        />
      )}
    </header>
  );
}
