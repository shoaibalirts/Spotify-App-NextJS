"use client";
import Link from "next/link";
export default function Header({ navLinks, children }) {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((navlink) => (
            <li key={navlink}>
              <Link href={`/${navlink}`} priority="true">
                {navlink}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>{children}</h1>
    </header>
  );
}
