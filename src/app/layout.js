import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "iTunes",
  description: "Spotify Api to build an app in nextJS ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
