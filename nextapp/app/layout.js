import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next13 Sample",
  description: "Next App",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/create">Write</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
