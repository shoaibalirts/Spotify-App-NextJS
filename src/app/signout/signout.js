"use client";
import { deleteCookie } from "@/lib/spotifyapi";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signout() {
  const [confirm, setConfirm] = useState(true);

  const router = useRouter();
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
