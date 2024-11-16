"use client";
import classes from "./artist.module.css";
export default function Artist({ genres }) {
  return (
    <>
      <h2 className="headingInGradiantColor">Artists</h2>
      <ul className={classes.list}>
        {genres.map((gener, index) => (
          <li key={`gener-${index}`} className={classes.gener}>
            {gener}
          </li>
        ))}
      </ul>
    </>
  );
}
