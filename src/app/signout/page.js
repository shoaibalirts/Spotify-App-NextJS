import { cookies } from "next/headers";

export default async function SignoutPage() {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get("token_cookie");
  return <Signout myCookie={myCookie} />;
}
