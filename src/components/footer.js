"use client";
import Image from "next/image";
import classes from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Link href="/playlist">
        <Image
          src="/images/listfooter.svg"
          width={20}
          height={20}
          alt="categories icon"
          priority
        />
      </Link>
      <Image
        src="/images/microphonefooter.svg"
        width={20}
        height={20}
        alt="microphone icon"
        priority
      />
      <div className={classes.wififooter}>
        <Image
          src="/images/wififooter.svg"
          width={20}
          height={20}
          alt="wifi icon"
          priority
        />
      </div>
      <Image
        src="/images/contrastfooter.svg"
        width={20}
        height={20}
        alt="contrast icon"
        priority
      />
      <Image
        src="/images/settingfooter.svg"
        width={20}
        height={20}
        alt="setting icon"
        priority
      />
    </footer>
  );
}
