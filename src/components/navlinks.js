import classes from "./header.module.css";
import Link from "next/link";
export default function Navlinks({ navLinks }) {
  return (
    <menu className={classes.menu}>
      {navLinks.map((navlink) => (
        <li key={navlink}>
          <Link href={`/${navlink}`} priority="true">
            {navlink}
          </Link>
        </li>
      ))}
    </menu>
  );
}
