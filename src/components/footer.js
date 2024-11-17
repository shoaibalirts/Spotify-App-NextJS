"use client";
import Image from "next/image";
import classes from "./footer.module.css";
import Link from "next/link";
import Signout from "./signout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/lib/spotifyapi";
export default function Footer() {
  const [confirm, setConfirm] = useState(true);
  const router = useRouter();

  function handleSignout() {
    console.log("clicked signout");

    function handleConfirm(event) {
      const btnValue = event.target.value;
      if (btnValue === "yes") {
        deleteCookie("token_cookie");
        setConfirm(false);
        router.push("/");
      } else if (btnValue === "no") {
        setConfirm(false);
      }
    }

    return (
      <main>
        <dialog open={confirm}>
          <h2>You are about to Signout?</h2>
          <form method="dialog">
            <button type="submit" value="yes" onClick={handleConfirm}>
              Yes
            </button>
            <button type="submit" value="no" onClick={handleConfirm}>
              No
            </button>
          </form>
        </dialog>
      </main>
    );
  }
  return (
    <footer className={classes.footer}>
      <Link href="/category" className={classes.footericoncontainer}>
        <Image
          className={classes.imgicon}
          src="/images/listfooter.svg"
          width={30}
          height={30}
          alt="categories icon"
          priority
        />
      </Link>
      <Link href="/category" className={classes.footericoncontainer}>
        <Image
          className={classes.imgicon}
          src="/images/microphonefooter.svg"
          width={20}
          height={20}
          alt="microphone icon"
          priority
        />
      </Link>
      <Link
        href="/featured"
        className={`${classes.footericoncontainer} ${classes.wififooter}`}
      >
        <Image
          className={classes.imgicon}
          src="/images/wififooter.svg"
          width={20}
          height={20}
          alt="wifi icon"
          priority
        />
      </Link>
      <Link href="/category" className={classes.footericoncontainer}>
        <Image
          className={classes.imgicon}
          src="/images/contrastfooter.svg"
          width={20}
          height={20}
          alt="contrast icon"
          priority
        />
      </Link>
      <div className={classes.footericoncontainer} onClick={handleSignout}>
        <Image
          className={classes.imgicon}
          src="/images/settingfooter.svg"
          width={20}
          height={20}
          alt="setting icon"
          priority
        />
      </div>
    </footer>
  );
}
