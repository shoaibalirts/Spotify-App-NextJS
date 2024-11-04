"use client";

export default function Signout({ myCookie }) {
  function confirmDeleteCookie(confirmState) {
    if (confirm === true) {
      alert("no delete");
    }
  }
  return (
    <>
      <header>
        <h1>Signout</h1>
      </header>
      <main>
        <button onClick={() => confirmDeleteCookie(true)}>Signout</button>
      </main>
      <footer>footer</footer>
    </>
  );
}
