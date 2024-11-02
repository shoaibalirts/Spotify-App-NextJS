"use client";
export default function Error() {
  return (
    <main>
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <p>
        Reason is that spotify token is expired. Please go browser, then
        application and remove the token_cookie
      </p>
    </main>
  );
}
