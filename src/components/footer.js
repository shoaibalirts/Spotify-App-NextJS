"use client";
import Image from "next/image";
import classes from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
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
      <Link href="/category" className={classes.footericoncontainer}>
        <Image
          className={classes.imgicon}
          src="/images/settingfooter.svg"
          width={20}
          height={20}
          alt="setting icon"
          priority
        />
      </Link>
    </footer>
  );
}
